import React, {useEffect} from 'react';
import './rollingline.css';

function ScrollTop(props) {
    const breakpoint = 99;

    var rollingDom;

    let lastScrollPos = 0;
    let ticking = false;
    let isEntered = false;

    function handleScroll(scrollPos) {
        isEntered = scrollPos > breakpoint;
        rollingDom.style.transform = isEntered ? "translateX(-160%)" : "translateX(0%)";
        rollingDom.style.width = isEntered ? "3rem" : "5rem";
        rollingDom.style.height = isEntered ? "3.5rem" : "0.75rem";
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
        <span id="rollingline" className={props.sectionClass}/>
    );
}

export default ScrollTop;