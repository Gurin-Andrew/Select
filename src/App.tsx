import React from 'react';
import './App.css';
import { Select } from './components/select/index'

function App() {

  let data = ["Иркутск", "Томск", "Красноярск", "Питер", "Москва", "Новосибирск"]
  return (
    <div className="App">
      <Select data={data} header="Choose town" multiple={false} ></Select>
    </div>
  );
}

export default App;
