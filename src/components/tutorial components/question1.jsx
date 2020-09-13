import React, { useState } from 'react';
import './javaBasics.css';

import { CSSTransition } from 'react-transition-group';

function Question1(props) {
    return(
    <div> 
    <div className="question-block">
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
            <AnswerItem value="incorrect" ans=">>> Hello World!">                    This actually isn't right! This is a 'gotcha' where it's correct
            in that the resulting value is both of the previous values added together,
            but if you look carefully there's no space between the strings that are first_half and
            second_half.
                </AnswerItem>
            <AnswerItem value="correct" ans=">>> HelloWorld!">
            Correct! It's a bit of a silly example but I can't
            stress enough how important it is to pay attention to these kinds of details in your code.
            </AnswerItem>
            <AnswerItem ans=">>> Error: Not able to add Strings" value="incorrect">
            You actually can add strings! 
            </AnswerItem>
        </div>
    </div>
    <br />
    <div className="question-block">
        <br />
        <p className="question-code">
            int a = 10; <br />
            int b = a + 20; <br />
            int c = b * 2; <br />
            <br />
            a = a + c;
        </p>
        <p>
            What is the resulting <span className="inline-code">value</span> of the 
            variable <span className="inline-code">a</span>?
        </p>
        <div className="answers">
            <AnswerItem value="incorrect" ans=">>> 10">
                The value of a does start at 10, but on the last line of code it gets changed
                to something new
            </AnswerItem>
            <AnswerItem ans=">>> 0" value="incorrect">
                When assigning variables their value Java will evaluate the right side
                of the equal-sign <em> first, </em> then put that new value into the 
                variable named on the left side.
            </AnswerItem>
            <AnswerItem ans=">>> 70" value="correct">
                Correct! Java saves a as 10, then makes b as 30, then c as 60. Finally,
                it takes the value of a it has currently in it, 10, and then adds that to
                the 60 from c, and the result is changing a to 70. This pattern of reassigning
                a new value to an existing variable is fundamental to programming.
                <br /> <br />
                <b>Note: </b> When accessing or changing a variable's value <em> we 
                    don't need to redeclare what type it is,</em> you just use it's name.
            </AnswerItem>
        </div>
    </div>
    </div>
    );
}

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
            <span className={open ? props.value + " ans-title-vis" : "ans-title"}>{props.ans}</span>
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

export default Question1;