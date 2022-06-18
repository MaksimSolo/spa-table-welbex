import React, {useMemo} from 'react';
import style from './TableGrid.module.css'

type TableHeaderType = {
    names: string[]
}
export const TableHeader = React.memo((props: TableHeaderType) => {
    console.log('TableHeader')
    const namesForRender = useMemo(() => props.names.map((n, index) =>
        <div key={index} className={style.headerName}>{n}</div>), [props.names])

    return <div className={style.tableHeader}>
        {namesForRender}
    </div>
});

