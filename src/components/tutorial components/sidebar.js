import React, {useEffect} from 'react';

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
        console.log(width);
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
        <div onClick={handleClick}>
            <svg className="sidebar" width="30" height="112" viewBox="-10 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" width="19" height="112" fill="#78DAC8" fillOpacity="0.41"/>
            <path className="brace-path" d="M22.7586 4C24.6552 4 26.8966 4.30835 29.4828 4.92504L30 5.85006L28.9655 11.5324C26.9828 
                11.0919 25.3879 10.8717 24.181 10.8717C21.4224 10.8717 19.3966 11.6645 18.1034 13.2503C16.8103 
                14.8361 16.1638 17.2588 16.1638 20.5184C16.1638 23.3376 16.6379 27.0817 17.5862 31.751C18.4483 
                36.8607 18.8793 40.3405 18.8793 42.1906C18.8793 48.7099 15.9914 53.2469 10.2155 55.8018V56.3304C15.9914 
                58.8852 18.8793 63.3782 18.8793 69.8094C18.8793 71.8357 18.4483 75.3155 17.5862 80.249C16.6379 85.0945 
                16.1638 88.8386 16.1638 91.4816C16.1638 94.8293 16.8103 97.2961 18.1034 98.8818C19.3966 100.468 21.4224 
                101.26 24.181 101.26C25.3879 101.26 26.9828 101.04 28.9655 100.6L30 106.282L29.4828 107.207C27.3276 107.736 
                25.0862 108 22.7586 108C17.931 108 14.2241 106.723 11.6379 104.168C9.13793 101.701 7.88793 98.0449 7.88793 
                93.1995C7.88793 90.8208 8.10345 88.2219 8.53448 85.4028C8.96552 82.5836 9.22414 80.8657 9.31035 80.249C10.0862 
                75.8441 10.4741 72.4964 10.4741 70.2058C10.4741 63.7747 6.98276 59.9864 0 58.8412V53.4231C3.62069 52.7183 6.25 
                51.4409 7.88793 49.5909C9.61207 47.6527 10.4741 45.0978 10.4741 41.9263C10.4741 39.7238 10.0862 36.4202 9.31035 
                32.0152C9.22414 31.4867 8.96552 29.7687 8.53448 26.8615C8.10345 23.9543 7.88793 21.3113 7.88793 18.9327C7.88793 
                14.0873 9.13793 10.3871 11.6379 7.83227C14.2241 5.27742 17.931 4 22.7586 4Z" fill="black"/>
            </svg>
        </div>
    );
}

export default SidebarHandler;