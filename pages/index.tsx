import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import {Grid} from "@material-ui/core";
import {useRouter} from "next/router";

export default function Index() {

    const router = useRouter()
    return (
        <Container style={{height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center'}}>

            <Grid container justify="center"
                  direction="column"
                  alignItems="center" spacing={2}>
                <Typography variant="h5" component="h1" gutterBottom>
                    Main page with page routing
                </Typography>
                <Grid item>
                    <Button color={"primary"}  variant={"outlined"} onClick={() => router.push("/Page1")}>
                        Go to Page1
                    </Button>
                </Grid>
                <Grid item>
                    <Button color={"primary"} variant={"outlined"} onClick={() => router.push("/Page2")}>
                        Go to Page2
                    </Button>
                </Grid>
                <Grid item>
                    <Button color={"primary"}  variant={"outlined"} onClick={() => router.push("/Page3")}>
                        Go to Page3
                    </Button>
                </Grid>

            </Grid>

        </Container>
    );
}
