import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ParagraphData from '../Lorem/ParagraphData';
import HeaderData from '../Lorem/HeaderData';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const ScrollableTabsButtonAuto = () => {
    // TESTING -> eventually, to get from props
    const listOfPortfolioNames = ['Portfolio 1', 'Portfolio 2', 'Portfolio 3', 'Portfolio 4'];

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    const store = sessionStorage;
    const isLoggedIn = store.getItem('user');

    return (
        <>
            {isLoggedIn ? (
                <div className={classes.root} >
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {listOfPortfolioNames.map((name, index) => {
                                return <Tab label={name} {...a11yProps(index)} key={index} />
                            })}
                        </Tabs>
                    </AppBar>
                    {listOfPortfolioNames.map((name, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TabPanel value={value} index={index} key={index}>
                                {isEven ? <ParagraphData />
                                    : <HeaderData />
                                }
                            </TabPanel>
                        )
                    })
                    }
                </div >
            ) : (
                    <Redirect to="/three" />
                )}
        </>
    )
}

export default ScrollableTabsButtonAuto;