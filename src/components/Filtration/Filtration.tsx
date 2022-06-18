import React, {ChangeEvent, useState} from 'react';
import style from './Filter.module.css'
import {FilterParamsType} from "../../App";

//типизация пользовательского фильтра
type FiltrationType = {
    changeFilter: (newParams: FilterParamsType) => void,
    tableHeaderNames: string[],
    conditionsForFilter: string[],
}

//компонент пользовательского фильтра на UI.
export const Filtration = (props: FiltrationType) => {

    //локальный стейт компонента, хук useState
    const [searchValue, setSearchValue] = useState<string>('')
    const [column, setColumn] = useState<string>('1')
    const [condition, setCondition] = useState<string>('1')

    //action - функции обработки событий UI
    const onChangeTitle = (e: ChangeEvent<HTMLSelectElement>) => {
        setColumn(e.currentTarget.value)
    }
    const onChangeCondition = (e: ChangeEvent<HTMLSelectElement>) => {
        setCondition(e.currentTarget.value)

    }
    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const sendValueToSearch = () => {
        props.changeFilter({column, condition, value: searchValue.trim()})

    };

    return <div className={style.filter}>
        <div>
            <div>Выберите столбец / Select a column</div>
            <select value={column} onChange={onChangeTitle}>
                <option value={'1'}>none</option>
                <option value={'2'}>{props.tableHeaderNames[1]}</option>
                <option value={'3'}>{props.tableHeaderNames[2]}</option>
                <option value={'4'}>{props.tableHeaderNames[3]}</option>
            </select>
        </div>
        <div>
            <div>Выберите условие / Select a condition</div>
            <select value={condition} onChange={onChangeCondition}>
                <option value={'1'}>none</option>
                <option value={'2'}>{props.conditionsForFilter[0]}</option>
                <option value={'3'}>{props.conditionsForFilter[1]}</option>
                <option value={'4'}>{props.conditionsForFilter[2]}</option>
                <option value={'5'}>{props.conditionsForFilter[3]}</option>
            </select>
        </div>
        <div>
            <div>Введите значение для поиска / Enter a search value</div>
            <input value={searchValue} onChange={changeSearchValue} onBlur={sendValueToSearch}
                   placeholder={'enter search value'} type="text" autoFocus={true}/>
        </div>
    </div>
};

