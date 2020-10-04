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
                Note that the <span className="inline-code"> Lower</span> class has a <em> function </em> called <span className="inline-code">
                    riseUp()</span> that changes it's wealth, not the First's wealth
                <br /><br />
                Let's make some instances of these classes in the standard <span className="inline-code"> Main</span> class!
            </p>
            <img src={MainClass} className="rounded img-inst" id="class-main-ex"/>
        {/* QUESTION 1 */}
            <p>
                <b>Question 1</b><br />
                <span className="inline-code">bilbo</span> is an <span className="vocab-inst"> instance </span> of which class?
            </p>
            <div className="answers">
                <AnswerItem ans="First" value="incorrect">
                Not quite! Look at the <span className="inline-code">Type</span> of the variable when it's made on line 5.
                </AnswerItem>
                <AnswerItem ans="Main" value="incorrect">
                While it's true that <span className="inline-code">Main</span> is a class it <em> could </em> be, it's not of this class.
                </AnswerItem>
                <AnswerItem ans="Lower" value="correct">
                Perfect! On line 5 it's created as an instance of the Lower class. That might not be fair though, Bilbo was doing just
                fine for himself before leaving the Shire.
                </AnswerItem>
            </div>

        </div>
        </div>
    );
}

export default Question2A;