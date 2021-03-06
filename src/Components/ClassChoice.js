import React, { Component } from 'react';
import DoneBtn from './DoneBtn';
import DropDown from './DropDown';

class ClassChoice extends Component{
    constructor(){
        super();
        this.state ={
        second: false,
        first: false
    }}

    HandleChange = (e) =>{
        const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            ...this.state,
            [e.target.name] : value
        });
    }


    render() {
        return ( 
        <>
        <section className="ClassChoice">
            <section className="Class2">
            <input className="RoundBox" type="checkbox" name="second" checked={this.state.second} onChange={this.HandleChange}></input>
            <label>2:a klass</label>
            </section>
            <section className="Class1">
               <input className="RoundBox" type="checkbox" name="first" checked={this.state.first} onChange={this.HandleChange} ></input>
            <label>1:a klass</label> 
            </section>
        </section>
        
        < DropDown className="DropDown" second={this.state.second} first={this.state.first} />
        </>
     );
    }

}
export default ClassChoice;
