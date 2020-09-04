import React from 'react';
import './setup.css';

import Downloads from './downloadsInstallation.jsx';

class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadsOpened : false
        }
        this.openTitle = this.openTitle.bind(this);
    }

    openTitle() {
        this.setState({
            downloadsOpened: !this.state.downloadsOpened
        });
    }

    render() {
        const { downloadsOpened } = this.state
        return (
            <div className="setup">
                <div className="download" onClick={this.openTitle}>
                    <h3>Downloads and Installation</h3>
                </div>
                {downloadsOpened && <Downloads />}
                <br />
                <hr className="setup-line" />
            </div>
        )
    }
}

export default Setup;