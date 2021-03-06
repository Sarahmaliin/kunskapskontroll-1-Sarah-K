import React, { Component } from 'react';
import ApproveTerms from './ApproveTerms';

    class NameForm extends Component{
        constructor(props){
            super(props);
            this.state ={
                firstName: "Greta",
                lastName: "Thunberg"
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
            <form className="Nameform">
                <label className="small-text FirstName">Förnamn</label>
                <input className="Name FirstNameField" type="text" name="firstName" value={this.state.firstName} onChange={this.HandleChange}></input>
                <label className="small-text LastName">Efternamn</label>
                <input className="Name LastNameField" type="text" name="lastName" value={this.state.lastName} onChange={this.HandleChange}></input>
            </form> 
            <ApproveTerms className="Approve" firstName={this.state.firstName} lastName={this.state.lastName} />
            </>
            )     
        }
        
    }
        
            
        
export default NameForm;