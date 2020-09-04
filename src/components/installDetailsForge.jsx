import React from 'react';

import './setup.css';

class InstallDetailsForge extends React.Component {
    render() {
        return (
            <div className="details-opened">
                <div className="detail-background"/>
                <b className="details-opened-title">Forge 1.15.2 MDK</b>
                <p>
                    Forge is what most people use to run mods in their games, but what actually is it doing?
                    Forge is, essentially, a decompiled version of Minecraft with an API that allows us to hook
                    into the game and add things. It uses Gradle, a build-tool to actually get your mods into the game,
                    and integrates everything you make into your unique build of the game you get to share with others.
                    <br /> <br />
                    Since we're going to be making mods, rather than just installing them, make sure to download
                    the <b> MDK </b> for the recommended build. Then unzip that file to somewhere you'll remember, this
                    is essentially the template for the mod we're going to be building off of.
                </p>
            </div>
        )
    }
}

export default InstallDetailsForge;