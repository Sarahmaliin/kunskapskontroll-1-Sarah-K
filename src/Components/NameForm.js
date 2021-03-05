import React, {useState} from 'react';

    const NameForm = () => {

        const [state, setState] = useState({
            firstName: "Greta",
            lastName: "Thunberg"
        }) 

        const HandleChange = (e) => {
                const value = e.target.value;
                setState({
                    ...state,
                    [e.target.name]: value
                })
            };
            

        return <form className="Namnform">
                <label className="small-text FirstName">Förnamn</label>
                <input className="Name FirstNameField" type="text" name="firstName" value={state.firstName} onChange={HandleChange}></input>
                <label className="small-text LastName">Efternamn</label>
                <input className="Name LastNameField" type="text" name="lastName" value={state.lastName} onChange={HandleChange}></input>
        </form>
    }
        
            
        
export default NameForm;