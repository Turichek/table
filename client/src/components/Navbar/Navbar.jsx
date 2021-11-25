import { List, Grid, ListItem } from '@mui/material'
import { purple } from '@mui/material/colors'
import { useHttp } from '../../hooks/http.hook'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiButton from './ApiButton'
import { GetData } from '../helpers/toData'

export default function Navbar() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const page = useSelector(state => state.page.page);
    const { loading, request } = useHttp();

    return (
        <Grid sx={{ backgroundColor: purple[100] }} container alignItems={'center'} justifyContent={'space-between'}>
            <List sx={{ p: 0, width: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <ListItem sx={{ p: 0, width: 0.2 }}>
                    <ApiButton page={page} disabled={loading} onClick={() => GetData(request,page,dispatch,data)} />
                </ListItem>
            </List>
        </Grid>
    )
}