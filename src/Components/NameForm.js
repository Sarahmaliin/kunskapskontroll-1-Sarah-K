import { useState } from "react";
import React from 'react';

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
            

        return <section>
            <>
                <label>Förnamn</label>
                <input type="text" name="firstName" value={state.firstName} onChange={HandleChange}></input>
                <label>Efternamn</label>
                <input type="text" name="lastName" value={state.lastName} onChange={HandleChange}></input>
            </>
        </section>
    }
        
            
        
export default NameForm;