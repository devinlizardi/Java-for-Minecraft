import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function AnswerItem(props) {
    const [open, setOpen] = useState(false);

    function calcHeight(el) {
        const sectionHeight = el.scrollHeight;
        requestAnimationFrame(() => {
            el.style.height = sectionHeight + 'px';
        });
    }

    return(
        <div onClick={() => setOpen(true)}>
            <span className={open ? props.value + " ans-title-vis" : "ans-title"}><em>{props.ans}</em></span>
            <div className={open ? props.value : null}>
                <div className="dropdown">
                    <CSSTransition in={open} classNames="answer-dropdown"
                    timeout={500} unmountOnExit onEnter={calcHeight}>
                        <div className="dropdown-content" id={0}>
                            {props.children}
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}

export default AnswerItem;