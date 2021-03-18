import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import CustomButton from "../components/CustomButton";
import UniversalLayout from "../components/UniversalLayout";


export default function Page3() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <UniversalLayout>
            <Typography variant="h4" component="h1" gutterBottom>
                Switch Me
            </Typography>
            <FormControl component="fieldset">
                <FormLabel component="legend">Some options</FormLabel>
                <RadioGroup aria-label="Some options" name="option1" value={value} onChange={handleChange}>
                    <FormControlLabel value="Option1" control={<Radio/>} label="Option1"/>
                    <FormControlLabel value="Option2" control={<Radio/>} label="Option2"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    <FormControlLabel value="disabled" disabled control={<Radio/>} label="(Disabled option)"/>
                </RadioGroup>
            </FormControl>
            <CustomButton/>
        </UniversalLayout>
    );
}
