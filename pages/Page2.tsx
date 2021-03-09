import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {FormControlLabel, FormGroup, Switch} from "@material-ui/core";
import BackButton from "../components/BackButton";

export default function Page2() {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.checked});
  };
  return (
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h5" component="h1" gutterBottom>
            Turn Switches and remember their position
          </Typography>
          <FormGroup row>
            <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA"/>}
                label="Secondary"
            />
            <FormControlLabel
                control={
                  <Switch
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                  />
                }
                label="Primary"
            />
            <FormControlLabel control={<Switch/>} label="Uncontrolled"/>
          </FormGroup>
          <BackButton/>
        </Box>
      </Container>
  );
}
