import React, {useEffect} from 'react';
import '../tutorial.css';

import CurlyIcon from '../../assets/curlyBraceIcon.svg';
import CurlyBordered from '../../assets/curlyBordered.svg';
import SideNavSVG from '../../assets/sideNavSVG.js';

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
            <div className="sidenav">
                <SideNavSVG />
                {this.state.javaOpened && <img id="javabrace" className="curlybrace" src={CurlyIcon} alt="curly brace for fun"/>}

                <SectionTitle customClickEvent={this.switchSection.bind(this)} name="javabasics" title="Java Basics" />
                {this.state.javaOpened && <JavaBasicsOpen pageOpen={this.props.pageOpen} openSection={this.props.openSection} />}

                <SectionTitle customClickEvent={this.switchSection.bind(this)} name="forgemdk" title="Forge MDK" />
                {this.state.forgemdkOpened && <ForgeMDKOpen pageOpen={this.props.pageOpen} openSection={this.props.openSection} />}
            </div>

            <SideBar />
            </div>
        )
    }
}


function SideBar() {
    var width = window.innerWidth;
    const breakpoint = 1300;

    const handleClick = () => {
        const sidenavDOM = document.getElementsByClassName('sidenav')[0];
        sidenavDOM.style.transform = sidenavDOM.style.transform === "translateX(-200%)"
             ? "translateX(70%)" : "translateX(-200%)";
    };

    useEffect(() => {
        const handleWindowResize = () => {
            width = window.innerWidth;
            const sidenavDOM = document.getElementsByClassName('sidenav')[0];
            sidenavDOM.style.transform = width < breakpoint ? "translateX(-200%)" : "translateX(0%)";
        }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);

    return(
        <div className="sidebar" onClick={handleClick}>
            <img src={CurlyBordered} alt="click for menu"/>
        </div>
    );
}

function SectionTitle(props) {
    const { name, title, customClickEvent } = props;
    return <h4 onClick={() => customClickEvent(name)} 
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

    return <div className="content">
                <em> 
                <p onClick={() => openSection("forge01", "forge")} className={forge01 ? "opened" : null}>
                    {forge01 ? "> mods.toml" : "mods.toml"}</p>                
                    <p>@mod config  </p>                 
                </em>
            </div>
}

export default Sidenav;