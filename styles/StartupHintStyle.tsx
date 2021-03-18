import {makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
    hint: {
        position: 'absolute',
        zIndex: theme.zIndex.tooltip,
        borderRadius: '10px',
        backgroundColor: 'rgba(37, 37, 37, 0.9);',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        margin: '20px 0px',
        color: '#999999'
    }
}));