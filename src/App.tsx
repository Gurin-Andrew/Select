import React from 'react';
import './App.css';
import { Select } from './components/select/index'

function App() {

  let datas = ["Иркутск", "Томск", "Красноярск", "Питер", "Москва", "Новосибирск"]
  const data = datas.map(index => {
    return ({
      value: index,
      id: datas.indexOf(index)
    })
  })
  return (
    <div className="App">
      <Select data={data} header="Choose town" multiple={false} ></Select>
      <Select data={data} header="Choose town" multiple={true}></Select>
    </div>
  );
}

export default App;
