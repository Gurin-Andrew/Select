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
