import React, {useEffect} from 'react';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import {useDebounce} from '../../hooks/debounce';

type SearchInputPropsType = {
    handleChangeSearch: (value: string) => void
    searchText: string
    setSearchText: (value: string) => void

}

export const Search = React.memo((props: SearchInputPropsType) => {

    const debouncedText = useDebounce(props.searchText);

    useEffect(() => {
        props.handleChangeSearch(debouncedText)
    }, [debouncedText])

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchText(event.target.value);
    };

    return (
        <div style={{marginBottom: -5}}>
            <FormControl sx={{m: 1, height: 36}} variant="outlined" size="small">
                <OutlinedInput id="search" type='text'
                               value={props.searchText}
                               onChange={handlerChange}
                               placeholder='Search...'
                               startAdornment={
                                   <InputAdornment position="start">
                                       <SearchIcon/>
                                   </InputAdornment>
                               }

                />
            </FormControl>
        </div>)
})
