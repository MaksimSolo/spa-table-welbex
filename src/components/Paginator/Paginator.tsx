import React, {useState} from 'react';
import style from './Paginator.module.css'
import {InitialStatePaginatorType, StringType} from "../../App";


//types
type PaginatorType = {
    state: InitialStatePaginatorType,
    stringData: StringType[],
    setCurrentPage: (newCurrentPage: number)=>void
}


export const Paginator = (props: PaginatorType) => {

    //заданное число видимых номеров страничек
    let pagesPortionSize = props.state.pagesPortionSize;
    //определяем необходимое число страниц для отрисовки всех полученных строк
    let pagesCount = Math.ceil(props.stringData.length / props.state.rowsPortionSize);
    //собираем массив номеров страниц
    let pagesArray = [];
    for (let p = 1; p <= pagesCount; p++) {
        pagesArray.push(p)
    }
    //считаем количество  "порций" номеров страниц
    let pagesPortionCount = Math.ceil(pagesCount / pagesPortionSize)
    //храним и меняем значения "порций" номеров страниц
    let [pagesPortionNumber, setPagesPortionNumber] = useState<number>(1)
    //левая и правая границы порций
    let startPagesPortionNumber = pagesPortionSize * (pagesPortionNumber - 1) + 1
    let endPagesPortionNumber = pagesPortionSize * pagesPortionNumber

    //фильтруем порцию из общего массива и создаем новый массив для отрисовки
    const pagesPortionForRender = pagesArray.filter(p => p >= (startPagesPortionNumber) && p <= (endPagesPortionNumber))
    const pagesForRender = pagesPortionForRender.map(p =>
        <span onClick={()=> props.setCurrentPage(p)}
            key={p} className={(p === props.state.currentPage) ? style.selectedPage : ''}>{p}</span>)



    return <div className={style.paginator}>
        {pagesPortionNumber > 1 && <button onClick={() => {
            setPagesPortionNumber(pagesPortionNumber - 1)
        }}>PREV</button>}
        {pagesForRender}
        {pagesPortionNumber < pagesPortionCount && <button onClick={() => {
            setPagesPortionNumber(pagesPortionNumber + 1)
        }}>NEXT</button>}
    </div>
};

