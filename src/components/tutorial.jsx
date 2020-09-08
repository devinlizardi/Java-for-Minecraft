import React from 'react';

import './tutorial.css';

import Sidenav from './tutorial components/sidenav.jsx';
import JavaBasics01 from './tutorial components/javaBasics01.jsx';
import JavaBasics02 from './tutorial components/javaBasics02.jsx';

class Tutorial extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            pageOpen : "",
        }
    }

    openSection(name) {
        this.setState({ pageOpen : name, })
    }

    render() {
        return(
            <div className="tutorial">
                <Sidenav openSection={this.openSection.bind(this)} />
                {this.state.pageOpen === "java01" ? <JavaBasics01 /> : null}
                {this.state.pageOpen === "java02" ? <JavaBasics02 /> : null}
            </div>
        )
    }
}

export default Tutorial;