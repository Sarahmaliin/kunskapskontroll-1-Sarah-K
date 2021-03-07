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
        <p className="Gbg">GÖTEBORG</p>
        <p className="Sthlm">STOCKHOLM</p>
        </section>
          <ClassChoice className="Class" />
      </Card>
      
    </div>
    
  );
}

export default App;

