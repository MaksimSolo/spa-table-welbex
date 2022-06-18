import React, {useState} from 'react';
import style from './Paginator.module.css'
import {InitialStatePaginatorType, StringType} from "../../App";

type PaginatorType = {
    state: InitialStatePaginatorType,
    stringData: StringType[],
    setCurrentPage: (newCurrentPage: number)=>void
}


export const Paginator = (props: PaginatorType) => {

    let pagesPortionSize = props.state.pagesPortionSize; //  from props (AppState)
    let pagesCount = Math.ceil(props.stringData.length / props.state.rowsPortionSize); //4
    let pagesArray = [];
    for (let p = 1; p <= pagesCount; p++) {
        pagesArray.push(p)
    }
    let pagesPortionCount = Math.ceil(pagesCount / pagesPortionSize)  // 2
    let [pagesPortionNumber, setPagesPortionNumber] = useState<number>(1)
    let startPagesPortionNumber = pagesPortionSize * (pagesPortionNumber - 1) + 1
    let endPagesPortionNumber = pagesPortionSize * pagesPortionNumber


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

