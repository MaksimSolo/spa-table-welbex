import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";

import {Filtration} from "./components/Filtration/Filtration";
import {Table} from "./components/Table/Table";


function App() {

    //state.  будет вынесен в отдельный файл и организовано получение данных с сервера "http://www.omdbapi.com/"
    //сайт предоставляет базу данных о фильмах, в связи с этим смысловые значения столбцов имеют допущения:)))

    const tableHeaderNames = ['Дата/Date', 'Название/Title', 'Количество/Quantity', 'Расстояние/Distance'];
    const conditionsForFilter = ['равно/equals', 'меньше/less', 'больше/more', 'содержит/contains']
    let [filterParams, setFilterParam] = useState<FilterParamsType>({
        column: '', condition: '', value: '',
    })
    let [initialStatePaginator, setInitialStatePaginator] = useState<InitialStatePaginatorType>({
        pagesPortionSize: 5,
        rowsPortionSize: 10,
        currentPage: 1,
    })
    let stringData = [
        {id: 'tt0108778', date: '22 Sep 1994', title: "Friends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108779', date: '23 Sep 1995', title: "Vriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108780', date: '24 Sep 1996', title: "FEFriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108781', date: '25 Sep 1997', title: "EFEFriends", quantity: '22 min', distance: '1994–2004'},
        {
            id: 'tt0108782', date: '26 Sep 1998', title: "Friesdfvasvvsdvjh vjhdf vbjhfvbends", quantity: '22 min',
            distance: '1994–2004'
        },
        {id: 'tt0108783', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108784', date: '27 Sep 1999', title: "geg", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108785', date: '27 Sep 1999', title: "fbdbfdb", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108786', date: '27 Sep 1999', title: "vfv", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108787', date: '27 Sep 1999', title: "ytj", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108788', date: '27 Sep 1999', title: "i", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108789', date: '27 Sep 1999', title: "liuil", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108790', date: '27 Sep 1999', title: "yk", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108791', date: '27 Sep 1999', title: "qdefe", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108792', date: '27 Sep 1999', title: "gtrg", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108793', date: '27 Sep 1999', title: "jyt", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108794', date: '27 Sep 1999', title: "kukukuk", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108795', date: '27 Sep 1999', title: "loi;o;", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108796', date: '27 Sep 1999', title: "'i67jjjt'", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108797', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108798', date: '27 Sep 1999', title: "uyky", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108799', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108800', date: '27 Sep 1999', title: "ukyku", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108801', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108802', date: '27 Sep 1999', title: "ukukhmj", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108803', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108804', date: '27 Sep 1999', title: "gre", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108850', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108860', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108870', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108880', date: '27 Sep 1999', title: "WEriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108890', date: '28 Sep 1910', title: "CDriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108901', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108902', date: '29 Sep 1911', title: "Mrirgerggends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108903', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108904', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108905', date: '29 Sep 1911', title: "Mriregreg ends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108906', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108907', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108908', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108909', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108910', date: '29 Sep 1911', title: "Mrfdvdfvds", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108920', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108930', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108940', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108950', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108960', date: '29 Sep 1911', title: "Mri4254wefds", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108970', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108980', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108990', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt1108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt2108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt3108900', date: '29 Sep 1911', title: "Mrifefsf", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt4108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt5108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt6108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt7108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt8108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt9108900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0208900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0308900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0408900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0508900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0608900', date: '29 Sep 1911', title: "Mriefdccdsdc", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0708900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0808900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0908900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0118900', date: '29 Sep 1911', title: "Mrdfsds", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0128900', date: '29 Sep 1911', title: "Mdsvsdvdvds", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0138900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0148900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0158900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0168900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0178900', date: '29 Sep 1911', title: "Mrvsdvs", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0188900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0198911', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108922', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108933', date: '29 Sep 1911', title: "dsvsdvds", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108944', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108955', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108966', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108977', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108988', date: '29 Sep 1911', title: "svsdvs", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108999', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0101100', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0102200', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0103300', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0104400', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0105500', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0106600', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0107700', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0108800', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0109900', date: '29 Sep 1911', title: "sdvaeafrgs", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt2208900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt3308900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt4408900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0448900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt5508900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0558900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt6608900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0166900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt7708900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt0778900', date: '29 Sep 1911', title: "Mriends", quantity: '22 min', distance: '1994–2004'},
        {id: 'tt8808900', date: '29 Sep 1911', title: "vdvsvsdv", quantity: '22 min', distance: '1994–2004'},
    ]


    //actions - логика изменения стейта. будет организована с помощью функций (reducers).
    const setCurrentPage = (newCurrentPage: number) => {
        setInitialStatePaginator({
            ...initialStatePaginator, currentPage: newCurrentPage
        })
    }
    const changeFilter = (newParams: FilterParamsType) => {
        setFilterParam(newParams)
    }



    //фильтрация на результате пользовательской настройки в UI.
    const filterRows = (column: string, condition: string, value: string, stringData: StringType[]) => {
        switch (column) {
            case '2': {
                switch (condition) {
                    case '2':
                        return stringData.filter(str => str.title.toLowerCase() === value.toLowerCase())
                    case '3':
                        return stringData.filter(str => str.title < value)
                    case '4':
                        return stringData.filter(str => str.title > value)
                    case '5':
                        return stringData.filter(str => str.title.toLowerCase().indexOf(value.toLowerCase()) > -1)
                    default:
                        return stringData
                }
            }
            case '3': {
                switch (condition) {
                    case '2':
                        return stringData.filter(str => str.quantity.toLowerCase() === value.toLowerCase())
                    case '3':
                        return stringData.filter(str => str.quantity < value)
                    case '4':
                        return stringData.filter(str => str.quantity > value)
                    case '5':
                        return stringData.filter(str => str.quantity.toLowerCase().indexOf(value.toLowerCase()) > -1)
                    default:
                        return stringData
                }
            }
            case '4': {
                switch (condition) {
                    case '2':
                        return stringData.filter(str => str.distance.toLowerCase() === value.toLowerCase())
                    case '3':
                        return stringData.filter(str => str.distance < value)
                    case '4':
                        return stringData.filter(str => str.distance > value)
                    case '5':
                        return stringData.filter(str => str.distance.toLowerCase().indexOf(value.toLowerCase()) > -1)
                    default:
                        return stringData
                }
            }
            default:
                return stringData
        }
    }

    //получаем отфильтрованные строки для отрисовки
    const stringsForRender = filterRows(filterParams.column, filterParams.condition, filterParams.value, stringData)

    return (
        <div className="App">
            <Header/>
            <div className="mainContainer">
                <Filtration tableHeaderNames={tableHeaderNames} conditionsForFilter={conditionsForFilter}
                            changeFilter={changeFilter} filterParams={filterParams}/>
                <Table tableHeaderNames={tableHeaderNames} stringData={stringsForRender}
                       initialStatePaginator={initialStatePaginator} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    );
}

export default App;

//types

//типизируем полученные строки
export type StringType = {
    id: string,
    date: string,
    title: string,
    quantity: string,
    distance: string,
}
//типизируем параметры поьлзовательского фильтра
export type FilterParamsType = {
    column: string,
    condition: string
    value: string,
}
//типизируем стейт данных передаваемых в компонент Paginator
export type InitialStatePaginatorType = {
    pagesPortionSize: number
    rowsPortionSize: number
    currentPage: number
}