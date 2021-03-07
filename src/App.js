import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import './App.css';
import ClassChoice from './Components/ClassChoice';
import NameForm from './Components/NameForm';
import ApproveTerms from './Components/ApproveTerms';
import DoneBtn from './Components/DoneBtn';
import DropDown from './Components/DropDown'


function App() {
  const [state, setState] = useState({

})


  return (
    <div className="App">
      <Card className="Card">
        <h1 className="Rubrik">ÅKA TÅG</h1>
        <section className="StäderSection">
        <p className="Gbg">GÖTEBORG</p>
        <p className="Sthlm">STOCKHOLM</p>
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

