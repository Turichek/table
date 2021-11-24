import { Button } from '@mui/material'
import React from 'react'

export default function ApiButton({page, disabled, onClick }) {
    return (
        <Button sx={{ color: 'black', p: 2, width: 1 }} disabled={disabled} onClick={onClick}>
            {
                page < 1 ? 
                'Get data for table'
                :
                'Get next 20 items for table'
            }
        </Button>
    )
}