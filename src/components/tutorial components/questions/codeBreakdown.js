import React from 'react';

class CodeBreakdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
        };
        this.breakdownRef = React.createRef();
    }

    handleClick = () => {
        let openHeight = this.breakdownRef.current.scrollHeight;
        requestAnimationFrame(() => {
            this.breakdownRef.current.style.maxHeight = this.state.open ? openHeight + "px" : "0";
            requestAnimationFrame(() => {
                this.breakdownRef.current.style.opacity = this.state.open ? "1" : "0";
            })
        });
        this.setState({ open : !this.state.open });
    }
    
    render() {
        return (
        <>
            <p className={(this.state.open ? " break-opened " : "") + "code-breakdown-title"} onClick={this.handleClick}>Code Breakdown</p>
            <p className="code-breakdown" ref={this.breakdownRef}>
                {this.props.children}
            </p>
        </>
        );
    }
}

export default CodeBreakdown;