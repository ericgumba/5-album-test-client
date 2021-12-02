import React from 'react';
import {useState} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ArtistGenreFilter = (props) => {
    const [Value, setValue] = useState("all");    //    "1" is the default value in this scenario. Replace it with the default value that suits your needs.
    const handleValueChange = event => { 
        setValue(event.target.value)
        props.setArtistNameSearch("")
        props.setGenre(event.target.value)
    }

    return(
        <FormControl>
            <InputLabel id="Input label">Select Genre</InputLabel>
                <Select
                    labelId= "Input label"
                    id= "Select Genre"
                    value= {Value}
                    defaultValue= {Value}
                    onChange= {handleValueChange}>

                    <MenuItem value="all">all</MenuItem>
                    <MenuItem value="hip-hop">hip-hop</MenuItem>
                    <MenuItem value="alternative-rock">alternative rock</MenuItem>
                    <MenuItem value="experimental">experimental</MenuItem>
                    <MenuItem value="indie-pop">indie pop</MenuItem>
                    <MenuItem value="alternative-hip-hop">alternative hip-hop</MenuItem> 
                    <MenuItem value="r-and-b">r&b</MenuItem> 
                    <MenuItem value="lo-fi">lo-fi</MenuItem> 

                </Select>
        </FormControl>
    )
};

export default ArtistGenreFilter;