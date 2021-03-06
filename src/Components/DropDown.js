import React, { Component } from 'react';
import NameForm from './NameForm';

class DropDown extends Component{
    constructor(props){
        super(props);
        this.state ={
            tickets: "1",
            title: "Ms"
        }
    }

    HandleChange = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    };
    

        render(){
            return ( 
            <>
            <section className="Grid-area-DD">
                <label className="small-text antal">Antal biljetter</label>
            <label className="small-text titel">Titel</label>
            <select className="DropDown DropDown-tickets" name="tickets" onChange={this.HandleChange} value={this.state.tickets}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> 
              <select className="DropDown DropDown-title" name="title" onChange={this.HandleChange} value={this.state.title}>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Mr">Mr</option>
                  <option value="Non-Binary">Non-Binary</option>
              </select>
            </section>
            
                <NameForm className="Name" ticket={this.state.tickets} title={this.state.title} />
              </>
           );
        }
          
      }
  
   
  export default DropDown;