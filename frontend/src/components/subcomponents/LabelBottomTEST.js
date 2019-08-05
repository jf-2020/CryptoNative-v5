import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
    root: {
        width: '100%',
        textColor: '#00C689',
        position: 'fixed',
        bottom: 0,
        background: '#1E2632',
        width: 500
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (

        <BottomNavigation value={ value } onChange={ handleChange } className={ classes.root }>
            <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={ <RestoreIcon /> }
                component={ Link }
                to="/one"
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={ <FavoriteIcon /> }
                component={ Link }
                to="/two"
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={ <LocationOnIcon /> }
                component={ Link }
                to="/three"
            />
            <BottomNavigationAction
                label="Folder"
                value="folder"
                icon={ <FolderIcon>folder</FolderIcon> }
                component={ Link }
                to="/four"
            />
        </BottomNavigation>
    );
}
