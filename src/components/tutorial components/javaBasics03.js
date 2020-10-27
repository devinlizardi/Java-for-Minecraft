import React from 'react';
import './javaBasics.css';
import './questions/questions.css';

function JavaBasics03(props) {
    return(
        <>
        <div className="text-content-base">
            <h1><em>SUBCLASSES</em></h1>
            <div className="text-content">
                <h3 className="section-title">Intro</h3>
                <p>
                    This section is all about <span className="vocab-sub"> subclasses</span>, which builds
                    on the ideas we already have about classes and instances, and it's the last step we need 
                    to work through before starting coding for Minecraft.
                    <br /><br />
                    Simply put <span className="vocab-sub"> subclasses </span> are extensions of a class; they fill
                    in the values an abstract class declares. What makes them important to us is that in adding new things 
                    to the game we have to start with and manipulate the base classes by extending them into subclasses.
                </p>
            </div>
        </div>
        </>
    )
}

export default JavaBasics03;