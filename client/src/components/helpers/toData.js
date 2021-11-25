import { Tooltip } from "@mui/material";
import { updateArrAction } from '../../store/Data/actions';
import { nextPageAction } from "../../store/Page/actions";

export const formatNewData = (data) => {
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        const newItem = {
            id: data[i].id,
            name: data[i].attributes.canonicalTitle,
            description: data[i].attributes.description,
            episodeCount: data[i].attributes.episodeCount,
            episodeLength: data[i].attributes.episodeLength,
            ageRating: data[i].attributes.ageRating,
        }
        arr.push(newItem);
    }

    return arr;
}

export const GetData = async (request, page, dispatch, data) => {
    try {
        const res = await request('/api/get', 'POST', { page: page });
        dispatch(nextPageAction(page + 1));
        const newData = formatNewData(res.data);

        if (data.arr.length === 0 || data.arr[0].id !== newData[0].id) {
            data.arr = data.arr.concat(newData);
        }

        dispatch(updateArrAction(data.arr));
        console.log("Data: ", data.arr);
    } catch (e) {
        console.log("Error");
    }
}

export const createColumns = (data) => {
    if (data.length !== 0) {
        const columns = [];
        const keys = Object.keys(data[0]);

        for (let i = 0; i < keys.length; i++) {
            let width;
            if (keys[i] === 'id') {
                width = 50;
            }
            else if (keys[i] === 'description') {
                width = 300;
            }
            else {
                width = 210;
            }
            const newColumn = {
                field: keys[i],
                width: width,
                editable: true,
                minWidth: 50,
                renderCell: (params) => (
                    <Tooltip title={params.value !== null ? params.value : 'null'} >
                        <span>{params.value}</span>
                    </Tooltip>
                ),
            }
            columns.push(newColumn);
        }

        return columns;
    }
    else {
        return [];
    }
}