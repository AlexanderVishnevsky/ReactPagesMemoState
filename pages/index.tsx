import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import UniversalLayout from "../components/UniversalLayout";
import CustomButton from "../components/CustomButton";

export default function Index() {
    return (
        <UniversalLayout>
            <Typography variant="h5" component="h1" gutterBottom>
                Main page with page routing
            </Typography>
            <Grid item>
                <CustomButton label={'Go to Page1'} color={"primary"} route={"/Page1"}/>
            </Grid>
            <Grid item>
                <CustomButton label={'Go to Page2'} color={"secondary"} route={"/Page2"}/>
            </Grid>
            <Grid item>
                <CustomButton label={'Go to Page3'} color={"inherit"} route={"/Page3"}/>
            </Grid>
        </UniversalLayout>
    );
}
