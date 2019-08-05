import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../Images/849.gif';


const useStyles = makeStyles({
    root: {
        background: '#1E2632',
        color: '#1E2632',
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    background: {
        background: '#1E2632',
    }
});

export default function ButtonAppBarTEST() {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Toolbar style={ { background: '#1E2632' } }>
                    <img src={ logo } />
                    <Typography variant="h6" className={ classes.title }>
                        Bitchin App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}