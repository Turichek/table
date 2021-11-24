import { List, Grid, ListItem } from '@mui/material'
import { purple } from '@mui/material/colors'
import { useHttp } from '../../hooks/http.hook'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ApiButton from './ApiButton'
import { formatNewData } from '../helpers/toData'
import { updateArrAction } from '../../store/Data/actions'

export default function Navbar() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const { loading, request } = useHttp();
    const [page, setPage] = useState(0);

    const GetData = async () => {
        try {
            const res = await request('/api/get', 'POST', { page: page });
            setPage(page + 1);
            const newData = formatNewData(res.data);
            data.arr = data.arr.concat(newData);

            dispatch(updateArrAction(data.arr));
            console.log("Data: ", data.arr);
        } catch (e) {
            console.log("Error");
        }
    }

    return (
        <Grid sx={{ backgroundColor: purple[100] }} container alignItems={'center'} justifyContent={'space-between'}>
            <List sx={{ p: 0, width: 1, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <ListItem sx={{ p: 0, width: 0.2 }}>
                    <ApiButton page={page} disabled={loading} onClick={GetData} />
                </ListItem>
            </List>
        </Grid>
    )
}