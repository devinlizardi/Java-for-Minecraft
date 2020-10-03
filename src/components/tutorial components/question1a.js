import React from 'react';
import './javaBasics.css';
import './animationsQ1.css';

import AnswerItem from './answerItem';

function Question1A() {
    return(
        <div>
        <div className="question-block">
            <p>
                The following code uses a <span className="inline-code"> while-loop </span>, which means each line of code inside it's curly-braces
                will be repeated in order until the condition of the while-loop is false. In this case it's always true, so think of it as a forever-loop!
                <br /><br />
                There's also an <span className="inline-code"> if-statement </span> that works just as you'd think: the code asks if the condition is true,
                and if it is it goes inside, if not it skips it.
            </p>
            <p className="question-code">
                int xPos = 0; <br /> <br />
                while (true) {'{'} <br />
                &nbsp;&nbsp;if (xPos {'>'} 300) {'{'} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;xPos = 0; <br />
                &nbsp;&nbsp;{'}'} <br />
                &nbsp;&nbsp;xPos = xPos + 1; <br />
                {'}'}
            </p>
            <p>
                The <span className="inline-code"> xPos </span> variable represents the x-position of the moving blocks in the answers below, and as you 
                can see in the code it's constantly changing. Each answer is showing a different way this variable is changing, and <b> only one of them
                matches the code </b> - try and figure out which one it is!
            </p>
            <br />
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
                    <br /><br />
                    <b>Note: </b>If you want to spend some more time exercising these coding muscles, using loops and changing variables, I highly recommend trying to
                    write out how you think these other blocks are moving. What do you think would be different from my code?
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