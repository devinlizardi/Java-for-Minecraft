import React from 'react';
import './setup.css';

import JavaDetails from './installDetails.jsx';
import ForgeDetails from './installDetailsForge.jsx';
import IntelliJDetails from './installDetailsIntelliJ.jsx';

class DownloadsInstallation extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            detailsOpened : false
        }
        this.openDetails = this.openDetails.bind(this);
    }

    openDetails() {
        this.setState({
            detailsOpened : !this.state.detailsOpened
        })
    }

    render() {
        return (
            <div className="download-opened">
                <hr id="coding-line" className="download-line" />
                <p>
                    Because we have to crack open Minecraft so we can modify and add our own things,
                    there's a bit of setup required that can be a little tedious. This guide is built
                    on modding Minecraft 1.15.2, though the concepts should last you beyond just that.
                    <br /> <br />
                    We'll need to download three things to get started
                    <br />
                    <div id="dl-links">
                        <a className="intext-link" target="_blank"
                        href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"> 
                        Java 8 JDK </a> <br />
                        <a className="intext-link" target="_blank"
                        href="https://files.minecraftforge.net/"> 
                        Forge MDK </a> <br />
                        <a className="intext-link" target="_blank"
                        href="https://www.jetbrains.com/idea/download/#section=windows">
                             IntelliJ Community IDE </a> 
                            (or <a className="intext-link" target="_blank" 
                            href="https://www.eclipse.org/downloads/">
                                 Eclipse </a> if you prefer) <br />
                    </div> <br />
                    <b>Note: </b>If you aren't familiar with installing these kinds of programs open this next section
                    for a more detailed guide, otherwise move on when you're comfortable.
                </p>
                <div className="details">
                    <h3 className="detail-opener" onClick={this.openDetails}> Installation Details </h3>
                    {this.state.detailsOpened &&
                        <div>
                            <JavaDetails />
                            <ForgeDetails />
                            <IntelliJDetails />
                        </div>
                     }
                </div>
            </div>
        );
    }
}

export default DownloadsInstallation;