import React, { Component } from 'react';
import './navbar.css';

class NavSites extends Component {
    state = { open: false };
    
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleButtonClick = () => {
        this.setState(state => {
            return { open: !state.open };
        });
    };

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };

    container = React.createRef();
    state = { open: false };

    render() {
        return (
            <div className="nav-button-container" ref={this.container}>
                <button type="button" className="nav-button" onClick={this.handleButtonClick}>
                    Sites ▼
                </button>
                {this.state.open && (
                    <div className="nav-dropdown">
                        <ul>
                            <a href="/launch_pads"><li>Launch pads</li></a>
                            <a href="/landing_pads"><li>Landing pads</li></a>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default NavSites;
