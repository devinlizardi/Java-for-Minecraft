import React from 'react';

function AppInBeta(props) {
    const divStyle = {'background': 'yellow', 'padding': '1em', 'position': 'absolute',
                      'text-align': 'center', 'width': '20em','left': props.left};

    return(
        <div style={divStyle}>
            <h1>More coming soon!</h1>
            <h2>This app is still in beta</h2>
        </div>
    );
}

export default AppInBeta;