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
                <br /><br />
                <b>Note: </b> Here's some info from the code above; it's all exactly the same as the code it's just here so you don't
                have to scroll all the way up every time.
            </p>
            <div className="inline-code" id="ref-code">
                First {'{'} wealth: 10400;{'}'} <br />
                Lower {'{'} wealth: 739; <br /> 
                <span style={{width: "3em", display: "inline-block"}} /> riseUp() {'{'} wealth = wealth * 2; {'}'} {'}'} <br />
                Main  {'{'} smaug : new First(); bilbo: new Lower(); bard: new Lower(); {'}'}
            </div>
            <br />
            <div className="question-code">
                System.out.println(bilbo.wealth); <br />
                System.out.println(bard.wealth); <br />
                <br />
                bilbo.riseUp(); <br />
                <br />
                System.out.println(bilbo.wealth); <br />
                System.out.println(bard.wealth); <br />
            </div>
            <p>What is printed to the console? <br /> (The dashes seperate new lines in the print)</p>
            <div className="answers">
                <AnswerItem ans={
                        <>
                        739 {'---'} 10400 {'---'} 739 {'---'} 10400
                        </>
                    } value="incorrect">
                Both instances <span className="inline-code">bilbo</span> and <span className="inline-code">bard</span> are from the
                <span className="inline-code"> Lower</span> class, so their wealth starts the same. The 10400 is actually the wealth of 
                smaug, it would take a lot of work from bilbo and the bard to get that much. One of their wealth does change however...
                </AnswerItem>
                <AnswerItem ans={
                        <>
                        739 {'---'} 739 {'---'} 739 {'---'} 739
                        </>
                    } value="incorrect">
                It's true that the bard and bilbo have the same wealth, but before the last two lines of code the bilbo instance
                runs the <span className="inline-code"> riseUp() </span> function, and that changes <em> only </em> bilbo's wealth.
                What does it change to, and how is this show up in the output?
                </AnswerItem>
                <AnswerItem ans={
                        <>
                        739 {'---'} 739 {'---'} 1478 {'---'} 739
                        </>
                    } value="correct">
                Perfect! The first two lines in the output are the same because bilbo and bard have the same amount of wealth,
                but once bilbo runs the <span className="inline-code"> riseUp() </span> function he doubles only that instance's wealth.
                This is really important to understand because instances of classes are seperate from each other, even if they come from
                the same class.
                </AnswerItem>
                <AnswerItem ans={
                        <>
                        739 {'---'} 739 {'---'} 1478 {'---'} 1478
                        </>
                    } value="incorrect">
                Not quite; bilbo runs the <span className="inline-code"> riseUp() </span> function, which means <em> only that instance </em>
                will change their wealth, it won't affect any other instances even if they come from the same class.
                </AnswerItem>
            </div>
        </div>
        </div>
    );
}

export default Question2A;