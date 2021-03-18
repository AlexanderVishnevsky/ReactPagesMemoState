import {ReactNode} from "react";
import {useStyles} from "../styles/UniversalLayoutStyle";

const UniversalLayout = ({children}: { children: ReactNode }) => {
    const classes = useStyles();
    return (
        <div className={classes.layout}>
            {children}
        </div>
    )
}

export default UniversalLayout