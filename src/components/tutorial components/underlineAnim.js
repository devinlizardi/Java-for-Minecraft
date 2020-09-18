import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './../tutorial.css';

function UnderLineAnim(props) {
    const { length, open } = props;

    return(
        <CSSTransition in={open} unmountOnExit classNames="line-open" timeout={300}>
            <hr className={length}/>
        </CSSTransition>
    );
}

export default UnderLineAnim;