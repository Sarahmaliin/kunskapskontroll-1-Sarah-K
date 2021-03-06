import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import './App.css';
import ClassChoice from './Components/ClassChoice';

function App() {
  const [state, setState] = useState({
    Åka: "ÅKA TÅG",
    Gbg: "GÖTEBORG",
    Sthlm: "STOCKHOLM"
})


  return (
    <div className="App">
      <Card className="Card">
        <h1 className="Rubrik">{state.Åka} </h1>
        <section className="StäderSection">
        <p className="Gbg">{state.Gbg} </p>
        <p className="Sthlm">{state.Sthlm} </p>
        </section>
        <ClassChoice className="Class" />
        {/* 
        Åka tåg del
        städer
        formulär
        states: klass, titel, förnamn, godkänner
        godkänner vilkor
        boka biljett knapp */}
      </Card>
    </div>
  );
}

export default App;

