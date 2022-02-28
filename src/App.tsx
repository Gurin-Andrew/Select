import React from 'react'
import './App.css'
import { Select } from './components/select/index'

function App() {
    const datas = [
        'Иркутск',
        'Томск',
        'Красноярск',
        'Питер',
        'Москва',
        'Новосибирск',
    ]
    const data = datas.map((index) => ({
        value: index,
        id: datas.indexOf(index),
    }))
    return (
        <div className="App">
            <Select data={data} header="Choose town" multiple={false} />
            <Select data={data} header="Choose town" multiple />
        </div>
    )
}

export default App
