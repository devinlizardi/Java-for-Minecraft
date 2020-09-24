import React from 'react';
import './javaBasics.css';

import Q1 from './question1.jsx';
import Q1_a from './question1a';
import Q1_b from './question1b';

function JavaBasics01(props) {
    return <div className="text-content-base">
                <h1><em>HELLO WORLD</em></h1>
                <div className="text-content">
                    <h3 className="section-title">Variables</h3>
                    <p>Let's write a variation of the basic "Hello World" program and get a sense of 
                    what Java syntax looks like. This is built on fundamental concepts like variables and
                    knowing what "printing to a console" means. <a href="#"> Here's some info on that if you need. </a>
                    <br /> <br />
                    Java wants you to be <em> extremeley </em> specific when making anything, and I've found understanding
                    this basic formula can help get a sense of how to approach things: <br /> <br />
                        <span className="code-text"> Type name = value; </span>
                    </p>
                    <div className="code-breakdown">
                    <p>
                        {'>'} <span className="inline-code">Type</span> here refers to the class of the variable we want to make, 
                        so if we wanted something basic like an integer 
                        (e. g. 0, 1, 2...) then our <span className="inline-code">Type</span> is <span className="inline-code">int.</span> <br /> <br />
                        {'>'} <span className="inline-code">name</span> refers to a name we make up so we can reference this variable 
                        later in our code. While it's fun to name your variables something silly it's generally best to give it a name that reminds
                        you of what it is. <br /><br />
                        {'>'} <span className="inline-code">value</span> is what we're actually going to put in that variable. This 
                        is where we have to match the Type; for a variable of Type int we put a number like 0, 1, 2, etc. <br /> <br />
                        {'>'} Lastly, that little semicolon (;) tells Java this is the end of our line of code, or at least the end of this idea 
                        (which should be the end of this line).
                    </p>
                    </div>
                    <p>
                    An integer is one of the seven Primitive Types of variables in Java, and that's why we refer to it with
                    a lowercase 'L.' If we wanted to make a variable of a more complex type, like a <span className="inline-code">String</span>,
                    then we use capital first letters. Here let's make a String we can use to build our Hello World program:
                        <br /><br /><span className="code-text"> String firstHalf = "Hello"; </span> <br /> <br />
                    Wonderful! Let's play with some variables and check comprehension. <br /> <br />
                    </p>
                    <Q1 />
                    <hr className="section-divider"/>
                    <h3 className="section-title">Functions / Methods</h3>
                    <p>
                        Variables are fantastic for storing and grabbing information for later, but as you saw in the
                        second question their values can also be changed. Take a look at this next example and try to
                        make a guess at what it's doing, even if you aren't familiar with an if-statement or all the
                        curly braces and paranthesis.
                    </p>
                    <Q1_a />
                    <p>
                        This is what coding is all about; setting up variables that we can use to represent something like an x-position,
                        then <em> changing </em> them based on a condition we set. This brings us to functions!
                        <br /> <br />
                        Think of functions like a re-usable machine we get to make; they (sometimes) ask for some piece of information in the form of a
                        variable, do something with that info, and give us back something new. Note that functions are pieces of our code
                        that don't actually do anything until we use them. Here's a simple example to breakdown this concept.
                        <br />
                    </p>
                    <div className="code-text">
                        int addNumbers(int num1, int num2) {'{'} <br />
                        &nbsp;&nbsp; int result = num1 + num2; <br />
                        &nbsp;&nbsp; return result; <br />
                        {'}'}
                    </div>
                    <br />
                    <div className="code-breakdown">
                        {'>'} <span className="inline-code">int</span> here fills in the same variable formula as above, it tells
                        Java that this function is going to give us back an integer.<br /><br/>
                        {'>'} <span className="inline-code">addNumbers</span> is the name of our function, similar to how 
                        variables have names. <br/><br/>
                        {'>'} <span className="inline-code">(int num1, int num2)</span> is where the function asks for the info it needs
                        in order to do it's thing. Inside these parantheses we declare we need two integers, and we put them in variables called
                        num1 and num2 respectively. <br /><br/>
                        {'>'} <span className="inline-code">int result = num1 + num2;</span> This code declares a new variable called result, and
                        the value of this variable is evaluated to be the sum of the two integers we asked for before. <br /><br/>
                        {'>'} <span className="inline-code">return result;</span> This sends back the result variable so we can grab it later.
                        Note that because we <em> return </em> the result variable it's type must match the one we declared at the very beginning
                        of our function.
                    </div>
                    <p>
                        Fantastic! If you feel good about understanding some of this function syntax explore this question
                        below.
                    </p>
                    <Q1_b />
                    <p>
                        If you've gotten this far you've done fantastic work and you're almost done with this section! <br />
                    </p>
                </div>
                <br /> <br />
            </div>
}

export default JavaBasics01;