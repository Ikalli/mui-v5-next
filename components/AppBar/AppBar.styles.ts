import { createStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        opacity: 1,
        padding: '10px 0 0',
        transition: 'opacity 600ms',
        zIndex: 50,

        [theme.breakpoints.down('xs')]: { 
            height: 70,
            '& .MuiToolbar-gutters': { paddingLeft: '2.5vw' }
        }
    },

    navlink: {
        margin: '0 2rem',
        fontSize: '1.2rem'
    }
});

export default styles;