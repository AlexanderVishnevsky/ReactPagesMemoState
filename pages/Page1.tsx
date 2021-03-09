import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {TextField} from "@material-ui/core";
import BackButton from "../components/BackButton";


export default function Page1() {
  return (
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            TextField Form
          </Typography>
          <form style={{width: '25ch'}} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard"/>
            <TextField id="filled-basic" label="Filled" variant="filled"/>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
          </form>
          <BackButton/>
        </Box>
      </Container>
  );
}
