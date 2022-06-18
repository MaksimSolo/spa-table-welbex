import React from 'react';

import style from './TableGrid.module.css'
import {InitialStatePaginatorType, StringType} from "../../App";



//types
type StringDataTableType = {
    stringData: StringType[],
    initialStatePaginator: InitialStatePaginatorType
}

//компонент возвращает jsx - строки таблицы
export const StringDataTable = (props: StringDataTableType) => {


    //заданное значение количества видимых строк на экране
    let rowsPortionSize = props.initialStatePaginator.rowsPortionSize
    //номер "порции" строк совпадает с номером текущей странички
    let rowsPortionNumber = props.initialStatePaginator.currentPage;
    // левая и правая границы порций
    let startRowsPortion = rowsPortionSize*(rowsPortionNumber-1)
    let endRowsPortion = rowsPortionSize*rowsPortionNumber - 1

    //фильтруем порцию из общего массива и создаем новый массив для отрисовки
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

