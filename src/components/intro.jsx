import React from 'react';
import './intro.css';

class Intro extends React.Component {
    render() {
        return (
        <div className="intro">
            <h3>What is "Coding for Minecraft?"</h3>
            <hr id="coding-line" className="intro-line" />
            <p>
                <div className="p-background"></div>
                When it comes to 'coding for Minecraft' there are a bunch of different directions you can take, 
                all depending on what you want to make it of it.
                <br /> <br />
                For example, if you're interested in learning to use Minecraft as a multiplayer platform so you can build 
                custom gamemodes to play with your friends,
                I recommend looking at <a href="#" className="intext-link">datapack modding</a>.
                <br /> <br />
                Or maybe you're interested in adding custom items, mobs, worlds, 3D models, etc... Then you should learn a 
                Minecraft modding API, like Forge. This website is designed for you - for first-timers learning programming theory, 
                to Java syntax, and then to the Forge API.
            </p>
            <br />
            <h3>How do I get started?</h3>
            <hr className="intro-line" />
            <p>
                <div className="p-background"></div>
                You're in the right place.
                <br /> <br />
                If you haven't setup your computer to start modding Minecraft take a look at the
                <a href="/setup" className="intext-link"> setup </a> 
                section, then if you're new to programming theory / Java poke through 
                the 
                <a href="#" className="intext-link"> OOP
                </a> and <a href="#" className="intext-link">Java </a> 
                sections, and then I recommend working through the example mod build in the 
                 final section.
            </p>
            <br />
            <h3>Credits / Resources</h3>
            <hr className="intro-line" />
            <p>
                <div className="p-background"></div>
                This tutorial series is built on resources of others in the modding community, I am
                nothing without them. Here's some links to the main documentation, videos, and other tutorial
                series I highly recommend you look at as well.
            </p>
        </div>)
    }
}

export default Intro;