import React from 'react';
import AnswerItem from './answerItem';

function Question2A() {
    return (
        <div>
        <div className="question-block">
            <p>starter text here</p>
            <div className="question-code">
                code <br />
                here
            </div>
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