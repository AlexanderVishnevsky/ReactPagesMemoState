import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import UniversalLayout from "../components/UniversalLayout";

export default function Index() {

    const router = useRouter()
    return (
        <UniversalLayout>
            <Typography variant="h5" component="h1" gutterBottom>
                Main page with page routing
            </Typography>
            <Grid item>
                <Button size={"large"} color={"primary"} variant={"contained"} onClick={() => router.push("/Page1")}>
                    Go to Page1
                </Button>
            </Grid>
            <Grid item>
                <Button size={"large"} color={"secondary"} variant={"contained"} onClick={() => router.push("/Page2")}>
                    Go to Page2
                </Button>
            </Grid>
            <Grid item>
                <Button size={"large"} color={"inherit"} variant={"contained"} onClick={() => router.push("/Page3")}>
                    Go to Page3
                </Button>
            </Grid>
        </UniversalLayout>
    );
}
