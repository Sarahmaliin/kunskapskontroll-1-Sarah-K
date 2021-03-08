import React from 'react'
import Card from '@material-ui/core/Card';
import './App.css';
import ClassChoice from './Components/ClassChoice';


function App() {

  return (
    <div className="App">
      <Card className="Card">
        <h1 className="Rubrik">ÅKA TÅG</h1>
        <section className="StäderSection">
        <section className="Gbg"> 
        <p>GÖTEBORG</p> 
        <p className="time start">10:30</p></section>
        <section className="Sthlm"><p>STOCKHOLM</p>
        <p className="time end">14:45</p></section>
        
        </section>
          <ClassChoice className="Class" />
      </Card>
      
    </div>
    
  );
}

export default App;

