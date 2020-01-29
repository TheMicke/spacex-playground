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
                            <li><a href="/capsules">Capsules</a></li>
                            <li><a href="/cores">Cores</a></li>
                            <li><a href="/dragons">Dragons</a></li>
                            <li><a href="/rockets">Rockets</a></li>
                            <li><a href="/roadster">Roadster</a></li>
                            <li><a href="/ships">Ships</a></li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default NavVehicles;
