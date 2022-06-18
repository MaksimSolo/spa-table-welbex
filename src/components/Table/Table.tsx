import React from 'react';
import style from './TableGrid.module.css'
import {TableHeader} from "./TableHeader";
import {StringDataTable} from "./StringDataTable";
import {InitialStatePaginatorType, StringType} from "../../App";
import {Paginator} from "../Paginator/Paginator";

type TableType = {
    initialStatePaginator: InitialStatePaginatorType
    tableHeaderNames: string[],
    stringData: StringType[],
    setCurrentPage: (newCurrentPage: number)=>void
}

export const Table = (props: TableType) => {

    return <div className={style.tableContainerGrid}>
        <Paginator state={props.initialStatePaginator} stringData={props.stringData} setCurrentPage={props.setCurrentPage}/>
        <TableHeader names={props.tableHeaderNames}/>
        <StringDataTable stringData={props.stringData} initialStatePaginator={props.initialStatePaginator} />
    </div>

}


