import React from 'react';
import './intro.css';

class Intro extends React.Component {
    render() {
        return (
        <div className="intro">
            <h3>How to use this Guide</h3>
            <hr id="coding-line" className="intro-line" />
            <div>
                <p>This guide is meant for new programmers, and should hopefully get you into modding Minecraft
                and learning about Java.
                <br /> <br />
                I recommend using this guide like this: <br /> <br />
                <span className="instructions-text"> 
                    First, read the section you're on completely. The goal is to familiarize yourself
                    with the <em> concepts </em> and get a sense of what the next section of code is 
                    going to accomplish.
                    <br /> <br />
                    Then feel free to copy the code line-by-line, just make sure you're typing it out
                    as if it were your idea first. This is really important because ultimately you should
                    feel ready to move on once you can read the conceptual next steps, write your own code to start,
                    and then use the code here to reference and debug what you came up with.
                </span> <br /> <br />
                Getting into coding can take awhile, and at first it'll likely feel like there's no way
                to figure this out on your own. Thankfully, nobody does! Everything on this guide came from some
                help, I highly recommend checking out the tutorials and resources I used below. </p>
            </div>
            <br />
            <h3>Where to Start</h3>
            <hr className="intro-line" />
            <div>
                <p>
                The Getting Started section covers setting up your computer to run Java and start editing
                some code. <br /> <br />
                There are also sections you can click through to learn more about how the code-editing software
                we're using works, in case there's something like "refactor" or "run the client" you're confused
                on how to do. <br /> <br />
                Finally, there's some reference for additional concepts that won't be touched on too much in the
                tutorial, in case something confuses you or you're interested in more. </p>
            </div>
            <br />
            <h3>Credits / Resources</h3>
            <hr className="intro-line" />
            <div>
                <p>
                This tutorial series is built on resources of others in the modding community, I am
                nothing without them. Here's some links to the main documentation, videos, and other tutorial
                series I highly recommend you look at as well. </p>
            </div>
        </div>)
    }
}

export default Intro;