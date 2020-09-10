import React from 'react';
import './javaBasics.css';

import { CSSTransition } from 'react-transition-group';

function Question1(props) {
    return <div className="question-block">
            <p> Read the following code, then explore the answers to the question below.</p>
            <p className="question-code">
                String first_half = "Hello"; <br />
                String second_half = "World!"; <br />
                String total = first_half + second_half;
            </p>
            <p>
                What is the resulting <span className="inline-code">value</span> of the 
                variable <span className="inline-code">named</span> total?
            </p>
            <div className="answers">
                <ul>"Hello World!"</ul>
                <ul>"HelloWorld!"</ul>
            </div>
    </div>
}

export default Question1;