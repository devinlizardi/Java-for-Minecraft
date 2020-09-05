import React from 'react';
import './setup.css';

import Downloads from './downloadsInstallation.jsx';
import IDEProjectStructure from './ideProjectStructure.jsx';

class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadsOpened : false,
            ideprojstructOpened : false,
        }
        this.openTitle = this.openTitle.bind(this);
    }

    openTitle(name) {
        switch (name) {
            case "downloads":
                this.setState({ downloadsOpened: !this.state.downloadsOpened });
                break;
            case "ideprojstruct":
                this.setState({ ideprojstructOpened : !this.state.ideprojstructOpened });
                break;
        }
    }

    render() {
        const { downloadsOpened, ideprojstructOpened } = this.state
        return (
            <div className="setup">
                <div className="download" onClick={ () => this.openTitle('downloads') }>
                    <h3>Downloads and Installation</h3>
                </div>
                { downloadsOpened && <Downloads /> }
                <br />
                <hr className="setup-line" />
                {/* COMPONENT BREAK */}
                <div className="ideprojstruct" onClick={ () => this.openTitle('ideprojstruct') }>
                    <h3>IDE and Project Structure</h3>
                </div>
                { ideprojstructOpened && <IDEProjectStructure /> }
                <br />
                <hr className="setup-line" />
            </div>
        )
    }
}

export default Setup;