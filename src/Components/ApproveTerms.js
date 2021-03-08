import React, { Component } from 'react';
import DoneBtn from './DoneBtn';

class ApproveTerms extends Component {
        constructor(props){
            super(props);
            this.state ={
            approve: false
        }
        
        }
    
        Approved = (e) =>{
            const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
            this.setState({
                ...this.state,
                [e.target.name] : value
            });
        }

    render(){
       return ( 
        <>
        <section className="Approve">
            <input className="RoundBox" type="radio" name="approve" onChange={() => this.setState({approve: true})}></input>
            <label>Godkänner villkoren</label>
        </section>
        
        <DoneBtn class={this.props.class} tickets={this.props.tickets} title={this.props.title} firstName={this.props.firstName} lastName={this.props.lastName} approved={this.state.approve}/>          
        </>
     ); 
    }
    
}
export default ApproveTerms;