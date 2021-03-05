import React from 'react'
import NameForm from './Components/NameForm';
import DropDown from './Components/DropDown';
import DoneBtn from './Components/DoneBtn'
import ApproveTerms from './Components/ApproveTerms'
import Card from '@material-ui/core/Card';
import './App.css';
import ClassChoice from './Components/ClassChoice';

function App() {
  
  return (
    <div className="App">
      <Card className="Card">
        <h1 className="Rubrik"> ÅKA TÅG </h1>
        {/* LÄGG TILL STÄDER-sektionen */}
        {/* <Typography variant="h5" component="h2" color="black" className="Rubrik">
        STOCKHOLM</Typography>
        <Typography variant="h5" component="h2" color="black" className="Rubrik">
        GÖTEBORG</Typography> */}
        <ClassChoice className="Class" />
        <DropDown className="DropDown" />
        <NameForm className="Name" />
        <ApproveTerms className="Approve" />
        <DoneBtn className="Done-btn" />
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

