import React from 'react';
import './javaBasics.css';
import './animationsQ1.css';

import AnswerItem from './answerItem';

function Question1A() {
    return(
        <div>
        <div className="question-block">
            <br />
            <p className="question-code">
                int xPos = 0; <br /> <br />
                while (true) {'{'} <br />
                &nbsp;&nbsp;if (xPos {'>'} 300) {'{'} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;xPos = 0; <br />
                &nbsp;&nbsp;{'}'} <br />
                &nbsp;&nbsp;xPos = xPos + 1; <br />
                {'}'}
            </p>
            <p> Which of the following animations best displays the behavior described above? <br /> <br />
                Anything inside the <span className="inline-code">while(true)</span> curly-braces will run in a loop forever, and anything in the
                <span className="inline-code"> if (condition) </span> curly-braces will only happen if that condition is true. For the animation, the xPos variable represents
                the x position of the square along the container.
            </p>
            <div className="answers">
                <AnswerItem ans={<MoveAnimation version={"example-block-1"} />} value="correct">
                    Correct! The code does the following loop forever: <br />
                    &nbsp;&nbsp;1. Check if the x-position has reached 300 (the end of the box) <br />
                    &nbsp;&nbsp;2. If it has, reset the x-position back to 0 <br />
                    &nbsp;&nbsp;3. Change the x-position variable to whatever it was +1, thereby incrementing it every step of the loop
                </AnswerItem>
                <AnswerItem ans={<MoveAnimation version="example-block-2" />} value="incorrect">
                    Take a look at how the xPos variable is reset - it never moves <em> from </em> 300 back <em> to </em> 0, it
                    only goes one way.
                </AnswerItem>
                <AnswerItem ans={<MoveAnimation version="example-block-3"/>} value="incorrect">
                    Because the line <span className="inline-code"> xPos = xPos + 1; </span> is inside the forever-loop the 
                    xPos variable <em> never stops changing.</em>
                </AnswerItem>
            </div>
        </div>
        </div>
    );
}

function MoveAnimation(props) {
    return(
        <div>
            <span className="beg">0</span>
            <span className="end">300</span>
            <div className={props.version}></div>
        </div>
    );
}

export default Question1A;