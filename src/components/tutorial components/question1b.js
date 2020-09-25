import React from 'react';
import AnswerItem from './answerItem';

function Question1B() {
    return (
    <div>
        <div className="question-block" >
            <p>First we make our function:</p>
            <p className="question-code">
                String sayHello(int n) {'{'} <br />
                &nbsp;&nbsp;int i = 0; <br />
                &nbsp;&nbsp;String result = ""; <br />
                &nbsp;&nbsp;while (i {'<'} n) {'{'} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;result = result + "hello"; <br />
                &nbsp;&nbsp;&nbsp;&nbsp;i = i + 1; <br />
                &nbsp;&nbsp;{'}'} <br />
                &nbsp;&nbsp;result = result + "...World!"; <br />
                {'}'}
            </p>
            <p>
                Then somewhere else in our code we <em> call </em> our function and provide the value to
                the variable it asks for.
            </p>
            <p className="question-code">
                String finalAnswer = sayHello(5);
            </p>
            <p>
                What is the value of the variable final_ans?
            </p>
            <div className="answers">
                <AnswerItem ans={">>> 'hello'"} value="incorrect">
                    The <span className="inline-code">result</span> variable changes more than once because
                    the line <span className="inline-code">result = result + "hello"</span> is in a loop.
                </AnswerItem>
                <AnswerItem ans={">>> 'hello...World!...World!...World!...World!...World!'"} value="incorrect">
                    Almost! The "...World!" string is actually only added once, after the loop has finished.
                </AnswerItem>
                <AnswerItem ans={">>> 'hello...World!hello...World!hello...World!' x5 times"} value="incorrect">
                    The result variable only adds the "hello" string 5 times, it only adds the "...World!" once the loop
                    is complete!
                </AnswerItem>
                <AnswerItem ans={">>> 'hellohellohellohellohello...World!'"} value="correct">
                    Correct! When we call our function and provide it with the number 5 it adds 5 "hello"s to the variable
                    result, then adds the final "...World!" once the loop is done!
                </AnswerItem>
            </div>
        </div>
    </div>
    );
}

export default Question1B;