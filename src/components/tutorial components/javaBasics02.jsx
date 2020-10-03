import React from 'react';
import './javaBasics.css';
import './questions/questions.css';

import Q2 from './questions/question2';
import Q2A from './questions/question2a';

import BlockComparison from './../../assets/block_comparison.jpg';
import PlankJava from './../../assets/plankjava.jpg';
import CreativeInventory from './../../assets/creative_inv.png';
import CreativeGraphic from './../../assets/inventory_instance.jpg';
import PlankInstance from './../../assets/plankInstanceJava.jpg';

function JavaBasics02() {
    const classPlankAlt = {
        plankAltText : "class Plank { / int hardness = 2; / boolean isDropsSelf = true; / double luminanc = 0.0 / ?",
        instanceAltText : `public class Main { / public static void main(String[] args) { / Plank myFirstPlank = new Plank();/
        //myFirstPlank.hardness >>> 2 / }} / class Plank { / int hardness = 2; / boolean isDropsSelf = true; / double luminance = 0.0;/}`,
    };

    return (<div className="text-content-base">
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
                    <img className="rounded" src={BlockComparison} alt="Plank / Glowstone / Stone"/>
                    <p id="blockcomp-desc">Note: I made up these values for example purposes</p>
                    <p>
                        In this diagram we describe 3 <b> different </b> blocks - wooden plank, glowstone, and diamond ore - 
                        with 3 of the <b> same </b> <span className="vocab-attr"> attributes</span>.
                        <br /> <br />
                        <span className="vocab-attr">Attributes </span> are a vocab word for this section; they are variables
                        that describe properties that are shared across similar ideas.
                        <br /> <br />
                        The <span className="vocab-attr"> hardness, drops self?, </span> and <span className="vocab-attr"> luminance </span> attribute
                        names are all the same per each block, but <em> values </em> differ between them. Because of this, if I were to describe to
                        you a Plank all I have to say is that the hardness is 2, the drops self is true, and the luminance is 0.0. But we can also 
                        take these ideas and make them more abstract!
                    </p>
                    <p><b> Note: </b> In code we right boolean variables with the word "is" in front, and use the lowerCamelCase style</p>
                    <Q2 />
                    <p>
                        Great work!! Lets transfer the ideas of Attributes to code and take a look at our first class in Java. <br /> <br />
                        <b>Note: </b> from this point on the examples of code are going to be images taken from a text-editor as they're
                        going to become more and more complex, if the images either don't load or you use a screen-reader there is alt-text included, 
                        or you can contact me for additional support.
                    </p>
                    <img className="rounded" src={PlankJava} alt={classPlankAlt.plankAltText}/>
                    <div className="code-breakdown">
                        <p>
                            {'>'} <span className="inline-code"> Class Plank </span> tells Java everything between the curly braces {'{ }'} is
                            what is inside this class. <br /> <br />
                            {'>'} <span className="inline-code" > int hardness / boolean isDropsSelf / double luminance </span> These are 
                            the <span className="vocab-attr"> attributes </span> from before - just defined <em> inside </em> the class so
                             they have their associated values.<br />
                        </p>
                    </div>
                    <p>
                        So as you can see because the attributes are contained inside the Plank class you can think of the basic form of a class 
                        as a group of attributes. Now to actually <em> use </em> this class we need to make an <span className="vocab-inst">instance.</span>
                    </p>
                    <hr className="section-divider" />
                    <h3 className="section-title">Instances</h3>
                    <p>
                        Perhaps the most confusing part of OOP is understanding what an <span className="vocab-inst"> instance </span> really is,
                        but once you do you can really break open Java and start to use it. <br /> <br />
                        Let's start with a Minecraft example again and work our way to the code.
                    </p>
                    <div className="instances-box">
                        <p>
                            You've probably seen this inventory before, if you've ever played Creative Mode in Minecraft. <br /> <br />
                            Let's think about <b> each one of the blocks in this inventory as a class. </b> That means somewhere in our Java code
                            there's a group of attributes that have the same names, but different values.
                        </p>
                        <img src={CreativeInventory} />
                    </div>
                    <br />
                    <div id="expanding" className="instances-box">
                        <img id="instance-graphic" src={CreativeGraphic} />
                        <p>
                            When you grab a block from the inventory and drop it in your hotbar below, the <b> block in your hotbar becomes
                            an <span className="vocab-inst"> instance </span> of that block's class. </b>
                        </p>
                    </div>
                    <br />
                    <p>
                        This means a few very important thing about instances: <br />
                        &nbsp;&nbsp; 1. You can have multiple instances of the same class <br />
                        &nbsp;&nbsp; 2. Classes do not <em> actually </em> exist anywhere <em> until </em> you actually make an instance of it <br /> <br />
                        Sometimes it helps to think of classes as templates, and instances are when you actually make something with it. You can
                        also think of classes as a cookie-cutter, and instances as the actual cookie. I've tried this metaphor a bunch though and 
                        it can easily be lost so let's stick with Minecraft.
                        <br /> <br />
                        Below is some example code that <em> actually works </em> if you want to type it out and give it a try. There are some words
                        in there we'll cover in the next section, but try and work through what you know and see what you can understand about
                        what's going on. If you don't know how to run Java code (which is okay it can be confusing), I highly recommend using a 
                        Java visualizer like <a href="https://cscircles.cemc.uwaterloo.ca/java_visualize/" target="_blank" rel="noopener noreferrer"> this </a> and 
                        typing it out yourself.
                    </p>
                    <img src={PlankInstance} className="rounded img-inst" alt={classPlankAlt.instanceAltText}/>
                    <br /> <br />
                    <div className="code-breakdown">
                        {'>'} <span className="inline-code"> public </span> This is a keyword we'll explore in the section below <br /><br />
                        {'>'} <span className="inline-code"> class Main </span> Just like how Plank is a class below, we also have to wrap
                        everything we do in Java in a class! <br /> <br />
                        {'>'} <span className="inline-code"> public static void main(String[] args) </span> This is definitely a whole lot and
                        it might be confusing for now but we'll get through it soon I promise! <br /> <br />
                        {'>'} <span className="inline-code"> Plank myFirstPlank = new Plank(); </span> This is 
                        the <span className="vocab-inst"> instance </span> of the Plank class. Notice how it fills in our variable formula from
                        before, with just a few adjustments. <br /> <br />
                        {'>'} <span className="inline-code"> //myFirstPlank.hardness {'>>>'} 2 </span> Anything that follows a // like this
                        is a comment, which means it's not actually used as code, it's just for us to read. This comment is meant to show
                        you that you can get the hardness attribute from the Plank instance using this dot syntax <br /><br />
                        {'>'} <span className="inline-code"> class Plank {'{}'} </span> This is the same class from before, only this time 
                        it's actually used to make an instance variable!
                    </div>
                    <p>
                        The <span className="vocab-inst"> instance </span> <span className="inline-code"> myFirstPlank </span> is of the 
                        Plank class, and therefore has all the attributes we gave it from before! We can access those attributes and do
                        stuff with them by using the period like in the comment above. 
                        <br /> <br />
                        The next questions are just about identifying the instances in the code and what class they come from.
                        <br />
                    </p>
                    <Q2A />
                </div>
                <br /><br /><br /><br /><br />
            </div>
    );
}

export default JavaBasics02;