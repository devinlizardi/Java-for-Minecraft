import React from 'react';
import '../tutorial.css';

import CurlyIcon from '../../assets/curlyBraceIcon.svg';
import SidebarHandler from './sidebar.js';

class Sidenav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            javaOpened : true,
            forgemdkOpened : true,
            basicItemOpened : true,
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
            case "basicitem":
                this.setState({ basicItemOpened : !this.state.basicItemOpened, });
                break;
            default:
                break;
        };
    }

    render() {
        return (
            <div>
            <div className="sidenav" id="sidenav-div">
                <SideNavBG />
                <HandleBrace sectionOpen={this.props.sectionOpen}/>

                <SectionTitle title="Java Basics" />
                {this.state.javaOpened && <JavaBasicsOpen pageOpen={this.props.pageOpen} openSection={this.props.openSection} />}

                <SectionTitle title="Forge MDK" />
                {this.state.forgemdkOpened && <ForgeMDKOpen pageOpen={this.props.pageOpen} openSection={this.props.openSection} />}

                <SectionTitle title="Basic Item" />
                {this.state.forgemdkOpened && <BasicItemOpen pageOpen={this.props.pageOpen} openSection={this.props.openSection} />}
            </div>

            <SidebarHandler />
            </div>
        )
    }
}

function SideNavBG() {
    return(
        <svg className="sidenav-BG" width="255" height="435" viewBox="0 0 291 500" xmlns="http://www.w3.org/2000/svg">
            <rect className="back-rect" x="9" y="25" width="255" height="415" rx="13" fill="#78DAC8" fillOpacity="0.48" stroke="#78DAC8" strokeWidth="6"/>
            <rect x="23" y="8" width="255" height="415" rx="13" fill="white" stroke="#78DAC8" strokeWidth="6"/>
        </svg>
    );
}

function HandleBrace(props) {
    const {sectionOpen} = props;

    return (
        <img className={"curlybrace " + sectionOpen}
        src={CurlyIcon} alt="curly brace for fun"/>
    );
}

function SectionTitle(props) {
    const { title } = props;
    return <h4
                className="content closed">
                {title}
            </h4>
}

function JavaBasicsOpen(props) {
    const {openSection, pageOpen} = props;
    const java01 = pageOpen === "java01";
    const java02 = pageOpen === "java02";
    const java03 = pageOpen === "java03";

    return <div className="content">
                <em> 
                    <p onClick={() => openSection("java01", "java")} className={java01 ? "opened" : null}>
                    {java01 ? "> Hello World" : "Hello World"}</p>
                    <p onClick={() => openSection("java02", "java")} className={java02 ? "opened" : null}>
                    {java02 ? "> OOP Basics" : "OOP Basics"}</p> 
                    <p onClick={() => openSection("java03", "java")} className={java03 ? "opened" : null}>
                    {java03 ? "> Subclasses" : "Subclasses"}</p>
                </em>
            </div>
}

function ForgeMDKOpen(props) {
    const {openSection, pageOpen} = props;
    const forge01 = pageOpen === "forge01";
    const forge02 = pageOpen === "forge02";

    return <div className="content">
                <em> 
                <p onClick={() => openSection("forge01", "forge")} className={forge01 ? "opened" : null}>
                    {forge01 ? "> mods.toml" : "mods.toml"}</p>
                <p onClick={() => openSection("forge02", "forge")} className={forge02 ? "opened" : null}>
                    {forge02 ? "> @mod config" : "@mod config"}</p>             
                </em>
            </div>
}

function BasicItemOpen(props) {
    const {openSection, pageOpen} = props;
    const basicitem01 = pageOpen === "basicitem01";
    const basicitem02 = pageOpen === "basicitem02";
    const basicitem03 = pageOpen === "basicitem03";

    return <div className="content">
                <em> 
                <p onClick={() => openSection("basicitem01", "basicitem")} className={basicitem01 ? "opened" : null}>
                    {basicitem01 ? "> Item Class" : "Item Class"}</p>
                <p onClick={() => openSection("basicitem02", "basicitem")} className={basicitem02 ? "opened" : null}>
                    {basicitem02 ? "> Registry Handler" : "Registry Handler"}</p>
                    {/* TODO: ADD BACK IN */}
                {/* <p onClick={() => openSection("basicitem03", "basicitem")} className={basicitem03 ? "opened" : null}>
                    {basicitem03 ? "> Additional Config" : "Additional Config"}</p> */}
                </em>
            </div>
}

export default Sidenav;