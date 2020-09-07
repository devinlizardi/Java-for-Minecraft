import React from 'react';

import './setup.css';
import './concepts.css';

const conceptMainStyle = {
    backgroundColor : "rgba(240, 93, 94, 0.2)",
};

class Concepts extends React.Component {

    render() {
        const {backgroundColor} = conceptMainStyle

        return (
            <div>
                <hr className="concepts-line" />
                <p className="default-text">
                    <div className="default-text-bg" style={{ backgroundColor: backgroundColor }}></div>
                    <span className="subheader-1"> Forge Concepts </span>
                    <br />
                    <b> Mod </b>
                    <br />
                    Forge always starts by finding the class in your mod file that starts with the
                    <em> @Mod </em> signifier. You won't be making the items in your mod in this class,
                    rather will be using it to register and control things from the top-down.
                    <br /> <br />
                    <b> Registration </b> 
                    <br />
                    Registration is the process of instancing your object and passing it into the actual game. When
                    making an object of any kind - item, block, entity, etc. - we <em> have </em> to register it 
                    both in the appropriate time and place.
                    <br /> <br />
                    <b> Gradle </b>
                    <br />
                    Gradle is a build tool that packages our mod for use - in this tutorial you don't need
                    to know all the technical details of Gradle (or even what it does), but it's something you'll see
                    often in your error reports.
                </p>
            </div>)
    }
}

export default Concepts;