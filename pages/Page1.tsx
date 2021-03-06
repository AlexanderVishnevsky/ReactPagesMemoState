import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {TextField} from "@material-ui/core";
import CustomButton from "../components/CustomButton";
import UniversalLayout from "../components/UniversalLayout";
import {useStyles} from "../styles/Page1Style";


export default function Page1() {
    const classes = useStyles();
    return (
        <UniversalLayout>
            <Typography variant="h4" component="h1" gutterBottom>
                TextField Form
            </Typography>
            <form className={classes.form} style={{}} noValidate>
                <TextField id="standard-basic" label="First Name" variant="outlined" autoComplete="none"/>
                <TextField id="filled-basic" label="Last Name" variant="outlined" autoComplete="none"/>
                <TextField id="outlined-basic" label="Address" variant="outlined" autoComplete="none"/>
            </form>
            <CustomButton/>

        </UniversalLayout>
    );
}
