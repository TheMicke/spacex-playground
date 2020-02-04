import React, { Component } from 'react';
import './navbar.css';

class NavOther extends Component {
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
                    Other ▼
                </button>
                {this.state.open && (
                    <div className="nav-dropdown">
                        <ul>
                            <a href="/history"><li>History</li></a>
                            <a href="/info"><li>Info</li></a>
                            <a href="/launches"><li>Launches</li></a>
                            <a href="/missions"><li>Missions</li></a>
                            <a href="/payloads"><li>Payloads</li></a>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default NavOther;
