import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import UserLoginModal from '../Forms/UserLoginModal';
import logo from '../../Images/849.gif';

import HamburgerMenu from '../subcomponents/HamburgerMenu';

const useStyles = makeStyles({
    root: {
        background: '#00C689',

        flexGrow: 1,
    },

    title: {
        padding: 15,
        flexGrow: 1,
        color: '#00C689',
        textColor: '#00C689'

    },
});

export default function SearchAppBar(props) {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="fixed">
                <Toolbar style={ { background: '#1E2632' } }>
                    <img src={ logo } alt="logo" />

                    <Typography className={ classes.title } variant="h6" noWrap>
                        CryptKeeper
                    </Typography>

                    { props.userPage ? (
                        <>
                            <div className={ classes.search }>
                                <UserLoginModal style={ { alignItem: 'right' } } />
                            </div>
                        </>
                    ) : props.portfolioPage ? (
                        <>
                            <div className={ classes.search }>
                                <HamburgerMenu />
                            </div>
                        </>
                    ) : (
                                <></>
                            ) }
                </Toolbar>
            </AppBar>
        </div>
    );
}

// SEARCH BAR //
// <div className={classes.search}>
//      <div className={classes.searchIcon}>
//          <SearchIcon />
//      </div>
//      <InputBase
//          placeholder="Search…"
//          classes={{
//              root: classes.inputRoot,
//              input: classes.inputInput,
//          }}
//          inputProps={{ 'aria-label': 'search' }}
//      />
//  </div>