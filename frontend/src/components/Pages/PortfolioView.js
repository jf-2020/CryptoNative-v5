// functional component representing the Portfolio page in which
// a given user is able to setup a set of portfolios

import React, { Component } from 'react';
import BaseTemplate from '../BaseTemplate';

import TabPanelScroll from '../subcomponents/TabPanelScroll';

// import LineChart from '../Charts/LineChart';
// import NewDonut from '../Charts/NewDonut';

// test data to be used until API tied in
// const test_linechart = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     prices: [65, 59, 80, 81, 56, 55, 40]
// },
//     test_donutchart = [150, 200, 250];



class PortfolioView extends Component {
    constructor(props) {
        super(props);

        const store = sessionStorage;
        const user_id = store.getItem('user');
        let portfolios = store.getItem('portfolios');

        if (portfolios) {
            portfolios = portfolios.split(" ").map(item => {
                return parseInt(item)
            });
        }

        this.state = {
            userId: user_id,
            isLoggedIn: user_id ? true : false,
            portfolios: portfolios,
            portfolioLabels: [],
            data: []
        };
    }

    async componentDidMount() {
        const url = `http://localhost:9000/portfolios/${this.state.userId}/get`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                portfolios: this.state.portfolios
            })
        });
        const raw_data = await response.json();
        const data = raw_data.data;

        const labels = Object.keys(data).map(id => {
            return data[id].name
        });

        const portfolioData = Object.keys(data).map(id => {
            const portfolio = data[id];
            const name = portfolio.name;
            const coins = portfolio.coins;
            const ret_obj = {};
            ret_obj[name] = coins;
            return ret_obj;
        });

        this.setState({
            portfolioLabels: labels,
            data: portfolioData
        });
    }

    render() {
        const portfolioPage = true;

        return (
            <>
                {this.state.isLoggedIn ? (
                    <BaseTemplate portfolioPage={portfolioPage}>
                        <h1>Portfolio View</h1>
                        <hr />
                        <TabPanelScroll labels={this.state.portfolioLabels} data={this.state.data} />
                    </BaseTemplate>
                ) : (
                        <BaseTemplate>
                            <h1>Portfolio List View</h1>
                            <hr />
                            <p>You are currently not logged in. Please login or create a user and login.</p>
                        </BaseTemplate>
                    )}
            </>
        )
    }
};

// const PortfolioView = () => {
//     return (
//         <BaseTemplate>
//             <h1>Portfolio View</h1>
//             <hr />
//             <AddPortfolioModal />
//             <hr />
//             <DeletePortfolioModal />
//             <hr />
//             <NewDonut data={test_donutchart} />
//             <LineChart data={test_linechart} />
//         </BaseTemplate>
//     )
// };

export default PortfolioView;
