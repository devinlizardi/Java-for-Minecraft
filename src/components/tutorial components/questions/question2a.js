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
            </div> <br />
        {/* QUESTION 2 */}
            <p>
                <b>Question 2</b> <br />
                Let's practice accessing some information from our instances
            </p>
            <div className="question-code">
                System.out.println(smaug.population);
            </div>
            <p><span className="inline-code">System.out.println()</span> is a function that prints whatever you want to the console,
            so we can see it! You can identify functions (as opposed to variables) with the parantheses, and what you put inside those
            parantheses is what that function needs in order to work. <br /><br />
            What does this code print to the console?
            </p>
            <div className="answers">
                <AnswerItem ans="smaug.population" value="incorrect">
                This is absolutely the correct bit of code that <em> should </em> be printed to the console, but Java is going to first
                evaluate this code, which means finding what value this becomes (like an int, String, double, etc.), then print it. What value 
                is this code accessing?
                </AnswerItem>
                <AnswerItem ans="0.85" value="incorrect">
                Almost! Which class does <span classNam="inline-code">smaug</span> belong to, and <em> then </em> what is the population?
                </AnswerItem>
                <AnswerItem ans="0.01" value="correct">
                Exactly! It prints 0.01 because <span classNam="inline-code">smaug</span> is of the <span className="inline-code">First</span> class,
                and that class has an <span className="vocab-attr">attribute</span> <span className="inline-code">population</span> with the value of
                0.01.
                </AnswerItem>
            </div>
        {/* QUESTION 3 */}
            <p>
                <b>Question 3</b> <br/>
                Last question! Now we know how to access <span className="vocab-attr">attributes</span> let's play with instance functions...
            </p>
            <div className="question-code">
                System.out.println(bilbo.wealth); <br />
                System.out.println(bard.wealth); <br />
                <br />
                bilbo.riseUp(); <br />
                <br />
                System.out.println(bilbo.wealth); <br />
                System.out.println(bard.wealth); <br />
            </div>
            <p>What is printed to the console?</p>
            <div className="answers">
                <AnswerItem ans={
                        <>
                        739 <br /> 10400 <br /> 739 <br /> 10400 <br />
                        </>
                    } value="incorrect">
                Both instances <span className="inline-code">bilbo</span> and <span className="inline-code">bard</span> are from the
                <span className="inline-code">Lower</span> class, so their wealth starts the same. One of them changes however...
                </AnswerItem>
            </div>
        </div>
        </div>
    );
}

export default Question2A;