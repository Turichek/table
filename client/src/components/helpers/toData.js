import { Tooltip } from "@mui/material";

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

export const createColumns = (data) => {
    if (data.length !== 0) {
        const columns = [];
        const keys = Object.keys(data[0]);

        for (let i = 0; i < keys.length; i++) {
            let width;
            if(keys[i]==='id'){
                width = 50;
            }
            else{
                width = 200
            }
            const newColumn = {
                field: keys[i],
                width: width,
                editable: true,
                minWidth: 50,
                renderCell: (params) => (
                    <Tooltip title={params.value} >
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