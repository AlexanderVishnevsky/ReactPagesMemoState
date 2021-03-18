import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import {ReactNode} from "react";
import {useStyles} from "../styles/UniversalLayoutStyle";

const UniversalLayout = ({children}: { children: ReactNode }) => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            {/*<Grid*/}
            {/*    container*/}
            {/*    justify="center"*/}
            {/*    direction="column"*/}
            {/*    alignItems="center" spacing={2}*/}
            {/*>*/}
                {children}
            {/*</Grid>*/}
        </div>
    )
}

export default UniversalLayout