import React from 'react'
import NameForm from './Components/NameForm';
import DropDown from './Components/DropDown';
import DoneBtn from './Components/DoneBtn'
import ApproveTerms from './Components/ApproveTerms'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import ClassChoice from './Components/ClassChoice';

function App() {
  
  return (
    <div className="App">
      <Card className="Card">
        <CardContent className="Card-content">
        <Typography variant="subtitle1" component="h1" color="primary" className="Rubrik">
        ÅKA TÅG</Typography>
        {/* <Typography variant="h5" component="h2" color="black" className="Rubrik">
        STOCKHOLM</Typography>
        <Typography variant="h5" component="h2" color="black" className="Rubrik">
        GÖTEBORG</Typography> */}
        <ClassChoice />
        <DropDown />
        <NameForm />
        <ApproveTerms />
        <DoneBtn />
        </CardContent>
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

