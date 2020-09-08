import React from 'react';

import '../tutorial.css';
import CurlyIcon from '../../assets/curlyBraceIcon.svg';

class Sidenav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            javaOpened : true,
            forgemdkOpened : false,
        }
    }

    switchSection(name) {
        switch (name) {
            case "javabasics":
                this.setState({ javaOpened : !this.state.javaOpened, });
            break;
            case "forgemdk":
                this.setState({ forgemdkOpened : !this.state.forgemdkOpened, });
            break;
        };
    }

    render() {
        return (
            <div className="sidenav">
                {this.state.javaOpened && <img id="javabrace" className="curlybrace" src={CurlyIcon}/>}
                <SectionTitle customClickEvent={this.switchSection.bind(this)} name="javabasics" title="Java Basics" />
                {this.state.javaOpened && <JavaBasicsOpen openSection={this.props.openSection} />}

                <SectionTitle customClickEvent={this.switchSection.bind(this)} name="forgemdk" title="Forge MDK" />
                {this.state.forgemdkOpened && <ForgeMDKOpen />}
            </div>
        )
    }
}

function SectionTitle(props) {
    const { name, title } = props;
    return <h4 onClick={() => props.customClickEvent(name)} 
                className="content closed">
                {title}
            </h4>
}

function JavaBasicsOpen(props) {
    const {openSection} = props;
    return <div className="content">
                <em> 
                    <p onClick={() => openSection("java01")}>{">"} Hello World <hr className="sidenav-line shorter"/> </p>                   
                    <p onClick={() => openSection("java02")}>{">"} OOP Basics <hr className="sidenav-line longer"/> </p>                    
                    <p>{">"} Subclasses <hr className="sidenav-line longest" /> </p>
                </em>
            </div>
}

function ForgeMDKOpen() {
    return <div className="content">
                <em> 
                    <p>{">"} mods.toml <hr className="sidenav-line shorter"/> </p>                   
                    <p>{">"} @mod config <hr className="sidenav-line longest"/> </p>                    
                </em>
            </div>
}

export default Sidenav;