import React from 'react';
import AnswerItem from './answerItem';

import FirstClass from './../../../assets/class_first.jpg';
import LowerClass from './../../../assets/class_lower.jpg';
import MainClass from './../../../assets/class_main_example.jpg';

function Question2A() {
    return (
        <div>
        <div className="question-block">
            <p>Here are some classes we'll make <span className="vocab-inst"> instances </span> out of:</p>
            <div id="class-container">
                <img src={FirstClass} className="rounded img-inst" id="class-first"/>
                <img src={LowerClass} className="rounded img-inst" id="class-lower"/>
            </div>
            <p>
                <b>Note: </b> the <span className="inline-code"> Lower</span> class has a <em> function </em> called <span className="inline-code">
                    riseUp()</span> that changes it's wealth, not the First's wealth
                <br /><br />
                Let's make some instances of these classes in the standard <span className="inline-code"> Main</span> class!
            </p>
            <img src={MainClass} className="rounded img-inst" id="class-main-ex"/>
            <p>post text here</p>
            <div className="answers">
                <AnswerItem ans="answer title" value="incorrect">
                dropdown text content
                </AnswerItem>
            </div>
        </div>
        </div>
    );
}

export default Question2A;