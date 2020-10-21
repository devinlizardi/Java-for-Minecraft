import React from 'react';

import './tutorial.css';
import './tutorial components/rollingline.css';

import Sidenav from './tutorial components/sidenav.jsx';
import ScrollTop from './tutorial components/scrollTop.js';
import JavaBasics01 from './tutorial components/javaBasics01.jsx';
import JavaBasics02 from './tutorial components/javaBasics02.jsx';
import JavaBasics03 from './tutorial components/javaBasics03';

class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOpen : "java01",
            sectionOpen : "java"
        }
    }

    openSection(name, section) {
        window.scroll({top : 0, behavior : "smooth"});
        this.setState({ pageOpen : name, sectionOpen : section})
    }

    render() {
        return(
            <div className="tutorial">
                <Sidenav openSection={this.openSection.bind(this)} pageOpen={this.state.pageOpen} sectionOpen={this.state.sectionOpen}/>

                {this.state.sectionOpen === "java" ? 
                    <div>
                        <ScrollTop sectionClass="javaroll"/> <br /> 
                        <h5 className="rollingtitle">Java Basics</h5>
                        {this.state.pageOpen === "java01" ? <JavaBasics01 /> : null}
                        {this.state.pageOpen === "java02" ? <JavaBasics02 /> : null}
                        {this.state.pageOpen === "java03" ? <JavaBasics03 /> : null}
                    </div>
                : null}

                {this.state.sectionOpen === "forge" ? 
                    <div>
                        <ScrollTop sectionClass="forgeroll" /> <br /> 
                        <h5 className="rollingtitle">Forge MDK</h5>
                        {this.state.pageOpen === "forge01" ? null : null}
                    </div>
                : null}

                {this.state.sectionOpen === "basicitem" ? 
                    <div>
                        <ScrollTop sectionClass="basicitemroll" /> <br /> 
                        <h5 className="rollingtitle">Basic Item</h5>
                        {this.state.pageOpen === "basicitem01" ? null : null}
                    </div>
                : null}
            </div>
        )
    }
}

export default Tutorial;