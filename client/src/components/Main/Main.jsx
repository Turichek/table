import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { createColumns } from '../helpers/toData';
import Table from './Table';
import { GetData } from '../helpers/toData';

export default function Main() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const page = useSelector(state => state.page.page);
    const { request } = useHttp();
    const columns = createColumns(data.arr);
    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
        if (data.arr.length === 0) {
            GetData(request, page, dispatch, data);
            setIsFirst(false);
            console.log('effect');
        }
    }, []);

    return (
        <Container>
            <Table columns={columns} rows={data.arr} onScroll={() => GetData(request, page, dispatch, data)} />
        </Container>
    )
}