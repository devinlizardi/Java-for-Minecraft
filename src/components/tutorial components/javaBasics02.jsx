import React from 'react';
import './javaBasics.css';

import Python from './pythonExample.js';
import Q2 from './question2';
import BlockComparison from './../../assets/block_comparison.jpg';

function JavaBasics02(props) {
    return <div className="text-content-base">
                <h1><em>OOP BASICS</em></h1>
                <div className="text-content">
                    <h3 className="section-title">Intro</h3>
                    <p>
                        So how do we actually use our code, now that we have a general
                        understanding of what it looks like? Here's where we get to learn the
                        most exciting part about working with Java: Object Oriented Programming.
                        <br /> <br />
                        Object Oriented Programming, or OOP for short, is a <em> theory </em> for
                        thinking about how code works. At a basic level all code ultimately is, is a list
                        of instructions for a computer to do one step at a time. The computer is really just
                        remembering data for us (variables) and changing them (functions - more on this soon).
                        <br /> <br />
                        These ideas about programming are more than enough on their own - you can do almost anything by making
                        variables and functions - but when it comes to large-scale projects like Minecraft it becomes 
                        far too complex too soon. 
                        <br />
                    </p>
                    <hr className="section-divider" />
                    <h3 className="section-title">Attributes</h3>
                    <p>Let's look at some Minecraft concepts and get to OOP.</p>
                    <div id="blockcomp">
                        <img src={BlockComparison} alt="Plank / Glowstone / Stone"/>
                    </div>
                    <p>
                        In this diagram we describe 3 <b> different </b> blocks - wooden plank, glowstone, and diamond ore - 
                        with 3 of the <b> same </b> <span className="vocab-attr"> attributes</span>.
                        <br /> <br />
                        <span className="vocab-attr">Attributes </span> are a vocab word for this section; they are variables
                        that describe properties that are shared across similar ideas.
                        <br /> <br />
                        The <span className="vocab-attr"> hardness, drops_self?, </span> and <span className="vocab-attr"> luminance </span> attribute
                        names are all the same per each block, but <em> values </em> differ between them. Because of this, if I were to describe to
                        you a Plank all I have to say is that the hardness is 2, the drops_self? is true, and the luminance is 0.0. But we can also 
                        take these ideas and make them more abstract!
                    </p>
                    <Q2 />
                </div>
                <br /><br /><br /><br /><br />
            </div>
}

export default JavaBasics02;