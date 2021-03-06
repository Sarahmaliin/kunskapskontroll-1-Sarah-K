import React, { Component } from 'react';
import DoneBtn from './DoneBtn'

class ApproveTerms extends Component {
        constructor(){
            super();
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
            <input type="checkbox" name="approve" onChange={() => this.setState({approve: true})}></input>
            <label>Godkänner villkoren</label>
        </section>
        
        < DoneBtn className="Done-btn" okey={this.state.approve}/>
        </>
     ); 
    }
    
}
 
export default ApproveTerms;