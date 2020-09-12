import React, { useState } from 'react';
import './javaBasics.css';

import { CSSTransition } from 'react-transition-group';

function Question1(props) {
    return <div className="question-block">
            <p> Read the following code, then explore the answers to the question below.</p>
            <p className="question-code">
                String first_half = "Hello"; <br />
                String second_half = "World!"; <br />
                String total = first_half + second_half;
            </p>
            <p>
                What is the resulting <span className="inline-code">value</span> of the 
                variable <span className="inline-code">named</span> total?
            </p>
            <div className="answers">
                <AnswerItem value="incorrect" ans=">>> Hello World!">
                <div>
                    This actually isn't right! This is a 'gotcha' where it's correct
                    in that the resulting value is both of the previous values added together,
                    but if you look carefully there's no space between the strings that are first_half and
                    second_half.
                </div>
                 </AnswerItem>
                <AnswerItem value="correct" ans=">>> HelloWorld!">
                <div>
                    Correct! It's a bit of a silly example but I can't
                    stress enough how important it is to pay attention to these kinds of details in your code.
                </div>
                </AnswerItem>
            </div>
    </div>
}

function AnswerItem(props) {
    const [open, setOpen] = useState(false);

    return(
        <div onClick={() => setOpen(true)}>
                <span className={open ? props.value + " ans-title-vis" : "ans-title"}>{props.ans}</span>
                <div className={open ? props.value : null}>
                    <div className="dropdown">
                        <CSSTransition in={open} classNames="answer-dropdown" timeout={100} unmountOnExit>
                        <div id={0}>
                            {props.children}
                        </div>
                        </CSSTransition>
                    </div>
                </div>
        </div>
    );
}

export default Question1;