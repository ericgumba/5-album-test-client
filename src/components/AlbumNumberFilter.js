import React from 'react';
import {useState} from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const AlbumNumberFilter = (props) => {
    const [Value, setValue] = useState("5");    //    "1" is the default value in this scenario. Replace it with the default value that suits your needs.
    const handleValueChange = event => { 
        setValue(event.target.value)

        props.setArtistNameSearch("")
        props.setNumberOfAlbums(event.target.value)
    }

    return(
        <FormControl>
            <InputLabel id="Input label">Select Number Of Albums</InputLabel>
                <Select
                    labelId= "Input label"
                    id= "Select"
                    value= {Value}
                    defaultValue= {Value}
                    onChange= {handleValueChange}
                >
                    <MenuItem value="0">All albums</MenuItem>
                    <MenuItem value="1">Exactly 1 Acclaimed Album</MenuItem>
                    <MenuItem value="2">Exactly 2 Acclaimed Albums</MenuItem>
                    <MenuItem value="3">Exactly 3 Acclaimed Albums</MenuItem>
                    <MenuItem value="4">Exactly 4 Acclaimed Albums</MenuItem>
                    <MenuItem value="5">5 Or More Acclaimed Albums</MenuItem>
                    <MenuItem value="6">6 Or More Acclaimed Albums</MenuItem>
                    <MenuItem value="7">7 Or More Acclaimed Albums</MenuItem>
                    <MenuItem value="8">8 Or More Acclaimed Albums</MenuItem>
                </Select>
        </FormControl>
    )
};

export default AlbumNumberFilter;