import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import makeStyles from '@material-ui/styles/makeStyles';
import styles from './AppBar.styles';
const useStyles = makeStyles(styles);

const AppBar = () => {
    const classes = useStyles();

    return (
        <MUIAppBar position="fixed" className={classes.root}>
            <Toolbar>
                <span className={classes.navlink}>Home</span>
                <span className={classes.navlink}>About Us</span>
            </Toolbar>
        </MUIAppBar>
    );
}

export default AppBar;