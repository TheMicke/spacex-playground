import React, { Component } from 'react';
import './navbar.css';

class NavVehicles extends Component {
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
                    Vehicles ▼
                </button>
                {this.state.open && (
                    <div className="nav-dropdown">
                        <ul>
                            <a href="/capsules"><li>Capsules</li></a>
                            <a href="/cores"><li>Cores</li></a>
                            <a href="/dragons"><li>Dragons</li></a>
                            <a href="/rockets"><li>Rockets</li></a>
                            <a href="/roadster"><li>Roadster</li></a>
                            <a href="/ships"><li>Ships</li></a>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default NavVehicles;
