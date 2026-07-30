import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";
import { SearchStyled } from "../assets/styled";

function SearchInput({placeholder}) {
  return (
    <SearchStyled>
        <div className='searchIcon'>
<TextField
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      size="small"
     
    />
            <SearchIcon />
          </div>
    </SearchStyled>
  )
}

export default SearchInput