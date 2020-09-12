import React from 'react';
import './setup.css';

import Downloads from './downloadsInstallation.jsx';
import IDEProjectStructure from './ideProjectStructure.jsx';
import Concepts from './concepts.jsx';

import { CSSTransition } from 'react-transition-group';

class Setup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadsOpened : true,
            downloadsClass : 'download-open',

            ideprojstructOpened : false,
            ideprojstructClass : 'ideprojstruct',

            conceptsOpened : false,
            conceptsClass : 'concepts',
        }
        this.openTitle = this.openTitle.bind(this);
    }

    openTitle(name) {
        switch (name) {
            case "downloads":
                this.setState({ 
                    downloadsOpened: !this.state.downloadsOpened,
                    downloadsClass: this.state.downloadsClass === 'download' 
                                    ? 'download-open' : 'download',
                 });
                break;
            case "ideprojstruct":
                this.setState({ 
                    ideprojstructOpened : !this.state.ideprojstructOpened,
                    ideprojstructClass : this.state.ideprojstructClass === 'ideprojstruct'
                                        ? 'ideprojstruct-open' : 'ideprojstruct',
                });
                break;
            case "concepts":
                this.setState({ 
                    conceptsOpened : !this.state.conceptsOpened,
                    conceptsClass : this.state.conceptsClass === 'concepts'
                                        ? 'concepts-open' : 'concepts',
                });
                break;
            default:
                break;
        }
    }

    render() {
        const { downloadsOpened, ideprojstructOpened, conceptsOpened } = this.state
        return (
            <div className="setup">
                <div className={this.state.downloadsClass} onClick={ () => this.openTitle('downloads') }>
                <h3>Downloads and Installation</h3>
                </div>
                <CSSTransition in={downloadsOpened} timeout={500} classNames="example" unmountOnExit>
                    <Downloads />
                </CSSTransition>
                <br />
                <hr className="setup-line" />
                <div className={this.state.ideprojstructClass} onClick={ () => this.openTitle('ideprojstruct') }>
                    <h3>IDE and Project Structure</h3>
                </div>
                <CSSTransition in={ideprojstructOpened} timeout={500} classNames="example" unmountOnExit>
                    <IDEProjectStructure />
                </CSSTransition>
                <br />
                <hr className="setup-line" />
                <div className={this.state.conceptsClass} onClick={ () => this.openTitle('concepts') }>
                    <h3>Additional Concepts</h3>
                </div>
                <CSSTransition in={conceptsOpened} timeout={500} classNames="example" unmountOnExit>
                    <Concepts />
                </CSSTransition>
                <br />
                <hr className="setup-line" />
            </div>
        )
    }
}

export default Setup;