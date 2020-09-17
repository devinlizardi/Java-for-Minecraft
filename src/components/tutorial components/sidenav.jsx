import React, {useState, useEffect} from 'react';
import '../tutorial.css';

import CurlyIcon from '../../assets/curlyBraceIcon.svg';
import CurlyBordered from '../../assets/curlyBordered.svg';

class Sidenav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            javaOpened : true,
            forgemdkOpened : true,
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
            default:
                break;
        };
    }

    render() {
        return (
            <div>
            <div className="sidenav">
                {this.state.javaOpened && <img id="javabrace" className="curlybrace" src={CurlyIcon} alt="curly brace for fun"/>}
                <SectionTitle customClickEvent={this.switchSection.bind(this)} name="javabasics" title="Java Basics" />
                {this.state.javaOpened && <JavaBasicsOpen pageOpen={this.props.pageOpen} openSection={this.props.openSection} />}

                <SectionTitle customClickEvent={this.switchSection.bind(this)} name="forgemdk" title="Forge MDK" />
                {this.state.forgemdkOpened && <ForgeMDKOpen />}
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
    return <div className="content">
                <em> 
                    <p onClick={() => openSection("java01", "java")}>{">"} Hello World </p> 
                             {pageOpen==="java01" && <hr className="sidenav-line shorter"/>}                  
                    <p onClick={() => openSection("java02", "java")}>{">"} OOP Basics </p> 
                            {pageOpen==="java02" && <hr className="sidenav-line longer"/>}                    
                    <p>{">"} Subclasses </p>
                    {pageOpen==="subclasses" && <hr className="sidenav-line longest" />} 
                </em>
            </div>
}

function ForgeMDKOpen(props) {
    return <div className="content">
                <em> 
                    <p>{">"} mods.toml  </p> <hr className="sidenav-line shorter"/>                  
                    <p>{">"} @mod config  </p>  <hr className="sidenav-line longest"/>                   
                </em>
            </div>
}

export default Sidenav;