import React from 'react';
import './javaBasics.css';

function JavaBasics01(props) {
    return <div className="text-content-base">
                <h1><em>HELLO WORLD</em></h1>
                <p className="text-content">
                    Let's write a variation of the basic "Hello World" program and get a sense of 
                    what Java syntax looks like. This is built on fundamental concepts like variables and
                    knowing what "printing to a console" means. <a href="#"> Here's some info on that if you need. </a>
                    <br /> <br />
                    Java wants you to be <em> extremeley </em> specific when making anything, and I've found understanding
                    this basic formula can help get a sense of how to approach things:
                        <p className="code-text"> Type name = value; </p>
                    <div className="code-breakdown">
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
                    </div>
                    <br />
                    An integer is one of the seven Primitive Types of variables in Java, and that's why we refer to it with
                    a lowercase 'L.' If we wanted to make a variable of a more complex type, like a <span className="inline-code">String</span>,
                    then we use capital first letters. Here let's make a String we can use to build our Hello World program:
                        <p className="code-text"> String first_half = "Hello"; </p>
                    Wonderful!
                </p>
            </div>
}

export default JavaBasics01;