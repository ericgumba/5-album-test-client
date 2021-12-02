import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
export default function Search(props) {

    const [text, setText] = React.useState('')

    const handleValueChange = (event,value) => { 
        console.log("handle value change called")
        console.log(event.target) 
        console.log(event.target.text) 
        console.log(value) 
        setText(value) 
        props.setArtistNameSearch(value)
    } 

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        onChange= {handleValueChange}
        options={props.artistList.map((artist) => artist.name)}
        renderInput={(params) => <TextField {...params} label="Search Artist" />}
      /> 

    </Stack>
  );
}
 