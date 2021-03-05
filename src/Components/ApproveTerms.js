import React, { useState } from 'react';

const ApproveTerms = () => {
        const [state, setState] = useState({
            approve: false
        })
    
        const Approved = (e) =>{
            const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
            setState({
                ...state,
                [e.target.name] : value
            });
        }

    return ( 
        <>
        <input type="checkbox" name="approve" checked={state.approve} onChange={Approved}></input>
        <label>Godkänner villkoren</label>
        </>
     );
}
 
export default ApproveTerms;