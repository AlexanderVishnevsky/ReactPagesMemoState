import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import BackButton from "../components/BackButton";
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
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="other" control={<Radio/>} label="Other"/>
            <FormControlLabel value="disabled" disabled control={<Radio/>} label="(Disabled option)"/>
          </RadioGroup>
        </FormControl>
        <BackButton/>
      </UniversalLayout>
  );
}
