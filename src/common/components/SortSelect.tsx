import React from 'react';
import {MenuItem, TextField} from "@mui/material";

const filter = [
    {
        value: 'New blogs first',
        label: 'New blogs first',
    },
    {
        value: 'Old blogs first',
        label: 'Old blogs first',
    },
    {
        value: 'From A to Z',
        label: 'From A to Z',

    },
    {
        value: 'From Z to A',
        label: 'From Z to A',
    },
]

export const SortSelect = () => {

    return (
        <div>
            <TextField
                size='small'
               /* id="outlined-select"*/
                select
                defaultValue='New blogs first'
            >
                {filter.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};

