import React from 'react';

import './setup.css';

class InstallDetailsIntelliJ extends React.Component {
    render() {
        return (
            <div className="details-opened">
                <b className="details-opened-title">IntelliJ IDE</b>
                <p>
                    IntelliJ is an Integrated Development Environment (IDE), that's essentially a super-fancy
                    text editor we'll be using to write and run our code. Make sure to download the Community
                    Edition because it's free :) <br /> <br />
                    You're also welcome to use the Eclipse IDE as it's far lighter and open-source, it's really
                    just a preference thing and shouldn't change much. For the sake of this tutorial I'm using
                    IntelliJ so if you want to follow along closely use that.
                </p>
            </div>
        )
    }
}

export default InstallDetailsIntelliJ;