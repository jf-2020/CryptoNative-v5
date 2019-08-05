// functional component representing the Portfolio page in which
// a given user is able to setup a set of portfolios

import React from 'react';
import BaseTemplate from '../BaseTemplate';

import TabPanelScroll from '../subcomponents/TabPanelScroll';

import AddPortfolioModal from '../Forms/AddPortfolioModal';
import DeletePortfolioModal from '../Forms/DeletePortfolioModal';
import AddCoinModal from '../Forms/AddCoinModal';

// import LineChart from '../Charts/LineChart';
// import NewDonut from '../Charts/NewDonut';

// test data to be used until API tied in
// const test_linechart = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     prices: [65, 59, 80, 81, 56, 55, 40]
// },
//     test_donutchart = [150, 200, 250];

const PortfolioView = () => {
    const store = sessionStorage;
    const isLoggedIn = store.getItem('user');

    return (
        <>
            {isLoggedIn ? (
                <BaseTemplate>
                    <h1>Portfolio View</h1>
                    <hr />
                    <AddPortfolioModal />
                    <hr />
                    <DeletePortfolioModal />
                    <hr />
                    <AddCoinModal />
                    <hr />
                    <TabPanelScroll />
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
