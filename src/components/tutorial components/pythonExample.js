import React from 'react';
import './codeExamples.css';

function PythonExample(props) {
    return(
        <div className="python-base">
            {props.children}
            <br />
        <span className="python-print"> 
            <span className="console">{'>>>'}</span>{props.print} 
        </span>
        </div>
    );
}

export default PythonExample;