import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Test from './Test'

class About extends Component {
    render() {
        return (
            <div>
                <h1>关于我们</h1>
                <Route render = {() => (
                    <Test title="hh" />
                )} />
            </div>
        );
    }
}

export default About;