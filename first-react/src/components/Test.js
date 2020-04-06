import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                {this.props.title}
            </div>
        );
    }
}

export default Test;