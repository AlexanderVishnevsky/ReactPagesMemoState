import {useStyles} from "../styles/StartupHintStyle";
import {Button, Grow, Typography} from "@material-ui/core";
import React from "react";

const StartupHint = ({handleChangeStartupHint}: { handleChangeStartupHint: () => void }) => {
    const classes = useStyles();
    return (
        <Grow in={true} style={{transformOrigin: '100 0 0'}}
              {...({timeout: 800})}>
            <div className={classes.hint}>
                <Typography variant={"h6"} color={"secondary"}>💡💡💡 Important 💡💡💡</Typography>
                <Typography className={classes.text}>
                    Hi there! Open different forms and check <br/>
                    how each form remembers selected values  <br/>
                    when leaving the form and returning again
                </Typography>
                <Button
                    variant={"outlined"}
                    color={"secondary"}
                    onClick={handleChangeStartupHint}>
                    Ok, got it
                </Button>

            </div>
        </Grow>
    )
}
export default StartupHint;