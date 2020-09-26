import React, {useState, useEffect} from 'react';
import './rollingline.css';
import { CSSTransition } from 'react-transition-group';

function ScrollTop(props) {
    const breakpoint = 99;
    const [isEntered, setIsEntered] = useState(false);

    var rollingDom;

    let lastScrollPos = 0;
    let ticking = false;

    function handleScroll(scrollPos) {
        setIsEntered(scrollPos > breakpoint);
        rollingDom.style.transform = isEntered ? "translateX(-160%)" : "translateX(0%)";
        rollingDom.style.width = isEntered ? "3rem" : "5rem";
        rollingDom.style.height = isEntered ? "1rem" : "0.75rem";
        rollingDom.style.opacity = isEntered ? "0.3" : "1";
    }

    useEffect(() => {
        rollingDom = document.getElementById("rollingline");
        window.addEventListener("scroll", (e) => {
            lastScrollPos = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll(lastScrollPos);
                    ticking = false;
                });
                ticking = true;
            }
        });
        return () => {window.removeEventListener("scroll", handleScroll)};
    });

    return(
        <div>
        <span id="rollingline" className={props.sectionClass}/>
        <ScrollUpArrow enter={isEntered}/>
        </div>
    );
}

function ScrollUpArrow(props) {
    const {enter} = props;

    return(
        <CSSTransition in={enter} timeout={100} unmountOnExit>
            <svg className="scroll-svg" width="30" height="33" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 18L11.5 8L23 18" stroke="black" strokeWidth="3"/>
            </svg>
        </CSSTransition>
    );
}

export default ScrollTop;