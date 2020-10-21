import React, {useState, useEffect} from 'react';
import './rollingline.css';
import { CSSTransition } from 'react-transition-group';

function ScrollTop(props) {
    const breakpoint = 89;
    const [isEntered, setIsEntered] = useState(false);
    const [enterClass, setEnterClass] = useState(" scrolled-line ");
    
    let lastScrollPos = 0;
    let ticking = false;

    function handleScroll(scrollPos) {
        setIsEntered(scrollPos > breakpoint);
        setEnterClass(isEntered ? " scroll-up-line " : " scrolled-line ");
    }

    function offSetHandleScroll() {
        lastScrollPos = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll(lastScrollPos);
                ticking = false;
            });
            ticking = true;
        }
    }

    const scrollTop = () => {
        window.scroll({top : 0, behavior : "smooth"});
        handleScroll();
    }

    useEffect(() => {
        window.addEventListener("scroll", offSetHandleScroll);
        return () => {window.removeEventListener("scroll", offSetHandleScroll)};
    });

    return(
        <div onClick={scrollTop}>
        <span id="rollingline" className={props.sectionClass + enterClass}/>
        <ScrollUpArrow enter={isEntered}/>
        </div>
    );
}

function ScrollUpArrow(props) {
    const {enter} = props;

    return(
        <CSSTransition in={enter} timeout={100} unmountOnExit classNames="scroll-in">
            <svg className="scroll-svg" width="30" height="33" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 18L11.5 8L23 18" stroke="black" strokeWidth="3"/>
            </svg>
        </CSSTransition>
    );
}

export default ScrollTop;