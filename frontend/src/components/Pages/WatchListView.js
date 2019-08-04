// functional component representing the Watch List page
// from which a user can set particular currencies to follow
// but perhaps not purchase

import React, { Component } from 'react';
import BaseTemplate from '../BaseTemplate';
import fetch from 'node-fetch';

class WatchListView extends Component {
    constructor(props) {
        super(props);

        this.state = { apiResponse: '' };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res_text => this.setState({
                apiResponse: res_text
            }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <BaseTemplate>
                <h1>Watch List View</h1>
                <hr />
                <p>{this.state.apiResponse}</p>
            </BaseTemplate>
        )
    }
}

export default WatchListView;