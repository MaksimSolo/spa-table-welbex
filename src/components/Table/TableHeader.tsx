import React, {useMemo} from 'react';
import style from './TableGrid.module.css'


//types
type TableHeaderType = {
    names: string[]
}

//компонент возвращает jsx - заголовок таблицы - мемоизирован, остальные компоненты тоже будут мемоизированы!
export const TableHeader = React.memo((props: TableHeaderType) => {
    console.log('TableHeader')
    const namesForRender = useMemo(() => props.names.map((n, index) =>
        <div key={index} className={style.headerName}>{n}</div>), [props.names])

    return <div className={style.tableHeader}>
        {namesForRender}
    </div>
});

