import React, { Component } from 'react';
import DropDown from './DropDown';



class ClassChoice extends Component{
    constructor(props){
        super(props);
        this.state ={
        class: 1
    }}

    HandleChange = (e) =>{
        if(e.target.id === "2"){
            this.setState({
                class: 2
            })
        } else{
            this.setState({
                class: 1
            })
        }
    }


    render() {
        return ( 
        <>
        
        <section className="ClassChoice">
            <section className="Class2">
            <input id="2" className="RoundBox" type="radio" name="second" checked={this.state.second} onChange={this.HandleChange} ></input>
            <label>2:a klass</label>
            </section>
            <section className="Class1">
               <input id="1" className="RoundBox" type="radio" name="first" checked={this.state.first} onChange={this.HandleChange} ></input>
            <label>1:a klass</label> 
            </section>
        </section>
        <DropDown class={this.state.class}/> 
        </>
     ); 
    }
} 
export default ClassChoice;
