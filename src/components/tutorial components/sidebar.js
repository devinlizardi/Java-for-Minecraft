import React, {useEffect} from 'react';
import CurlyBordered from '../../assets/curlyBordered.svg';

function SidebarHandler() {
    const breakpoint = 1400;
    const standardMargin = "-38rem";
    const offScreenMargin = "-80rem";
    const mainLeftPercent = getComputedStyle(document.documentElement)
        .getPropertyValue('--main-left-percent');

    var width;
    var isOnScreen;
    var sidenavDom;

    const changeMargin = () => {
        width = window.innerWidth;
        isOnScreen = width > breakpoint;
        sidenavDom = document.getElementsByClassName('sidenav')[0];
        requestAnimationFrame(() => {
            sidenavDom.style.marginLeft = isOnScreen ? standardMargin : offScreenMargin;
            sidenavDom.style.left = mainLeftPercent;
        });
    }

    const handleClick = () => {
        sidenavDom = document.getElementsByClassName('sidenav')[0];
        sidenavDom.style.left = !isOnScreen ? "5rem" : offScreenMargin;
        sidenavDom.style.marginLeft = !isOnScreen ? "0" : mainLeftPercent;
        isOnScreen = !isOnScreen;
    };

    useEffect(() => {
        changeMargin();
        window.addEventListener("resize", changeMargin);
        return () => window.removeEventListener("resize", changeMargin);
    });

    return(
        <div className="sidebar" onClick={handleClick}>
            <img src={CurlyBordered} alt="click for menu"/>
        </div>
    );
}

export default SidebarHandler;