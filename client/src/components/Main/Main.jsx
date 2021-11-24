import { Container } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { createColumns } from '../helpers/toData';
import Table from './Table'

export default function Main() {
    const data = useSelector(state => state.data.arr);
    const columns = createColumns(data);

    return (
        <Container>
            <Table columns={columns} rows={data} />
        </Container>
    )
}