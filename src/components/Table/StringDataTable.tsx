import React from 'react';

import style from './TableGrid.module.css'
import {InitialStatePaginatorType, StringType} from "../../App";


type StringDataTableType = {
    stringData: StringType[],
    initialStatePaginator: InitialStatePaginatorType
}

export const StringDataTable = (props: StringDataTableType) => {


    let rowsPortionSize = props.initialStatePaginator.rowsPortionSize
    let rowsPortionNumber = props.initialStatePaginator.currentPage;

    let startRowsPortion = rowsPortionSize*(rowsPortionNumber-1)
    let endRowsPortion = rowsPortionSize*rowsPortionNumber - 1

    const rowsPortionForRender = props.stringData.filter((str, i) => i >= startRowsPortion && i <= endRowsPortion)

    const stringsForRender = rowsPortionForRender.map(str => <div key={str.id} className={style.rowGridItem}>
        <span>{str.date}</span>
        <span>{str.title}</span>
        <span>{str.quantity}</span>
        <span>{str.distance}</span>
    </div>)


    return <div>
        {stringsForRender}
    </div>
};

