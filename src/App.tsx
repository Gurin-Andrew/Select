import React from 'react'
import './App.css'
import { Select } from './components/select/index'
import irkutsk from './img/irkutk.png'

function App() {
    const Test = [
        'Иркутск',
        'Томск',
        'Красноярск',
        'Питер',
        'Москва',
        'Новосибирск',
    ]
    const data = Test.map((index) => ({
        value: index,
        id: Test.indexOf(index),
        icon: '',
    }))
    data[0].icon = irkutsk

    /* Для компонента доступны следующие пропсы:
        1)multiple: boolean. Если == true, то будет доступен выбор из нескольких вариантов
        2)selectSize: "small"|"medium"|"large" по умолчанию medium: размер компонента
        3)background: String - фоновый цвет компонента
        4)header: Заголовок компонента
        5)Формат данных на вход:  {
            value:string,
            id:nomber,
            icon?:string
        }
    */

    return (
        <div className="App">
            <Select
                data={data}
                header="Choose town"
                multiple={false}
                selectSize="small"
            />
            <Select
                data={data}
                header="Choose town"
                multiple
                selectSize="large"
                background="green"
            />
            <Select
                data={data}
                header="Choose town"
                multiple
                background="red"
            />
        </div>
    )
}

export default App
