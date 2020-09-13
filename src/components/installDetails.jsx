import React from 'react';

import './setup.css';

class InstallDetailsJava extends React.Component {
    render() {
        return (
            <div className="details-opened">
                <b className="details-opened-title">Java 8 JDK</b>
                <p>
                    We need to install Java before anything else, even if you already have Minecraft installed
                    and working. We're also going to be grabbing the Java Development Kit (JDK) because, guess what,
                    we're developers! <br /> <br />
                    The link above will send you to the Oracle website and make sure to download the correct package
                    for your operating system. If you're on Windows 10 you might also need to set your environment variables,
                    and this can be a bit confusing. Here's a document I made to help with this:
                     <a href="#"> JDK_Env_Setup.pdf </a>
                </p>
            </div>
        )
    }
}

export default InstallDetailsJava;