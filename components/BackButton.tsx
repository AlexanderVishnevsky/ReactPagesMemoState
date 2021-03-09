import Button from "@material-ui/core/Button";
import * as React from "react";
import {useRouter} from "next/router";

const BackButton = () => {
    const router = useRouter()
    return(

    <Button variant="contained" onClick={() => router.push('/')}>
        Go to the main page
    </Button>
) }
export default BackButton;