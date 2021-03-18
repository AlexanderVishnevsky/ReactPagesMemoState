import Button from "@material-ui/core/Button";
import * as React from "react";
import {useRouter} from "next/router";
import {PropTypes} from "@material-ui/core";

interface CustomButtonInterface {
    label?: string;
    route?: string;
    color?: PropTypes.Color;
}

const CustomButton = ({label = 'Go to the main page', route = '/', color = 'primary'}: CustomButtonInterface) => {
    const router = useRouter()
    return (
        <Button variant="contained" color={color} onClick={() => router.push(route)}>
            {label}
        </Button>
    )
}
export default CustomButton;