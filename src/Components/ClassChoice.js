import React, { useState } from 'react';

const ClassChoice = () =>{
    const [state, setState] = useState({
        second: false,
        first: false
    })

    const HandleChange = (e) =>{
        const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name] : value
        });
    }

return ( 
        <>
        <label>2:a klass</label>
        <input type="checkbox" name="second" checked={state.second} onChange={HandleChange}></input>
        <label>1:a klass</label>
        <input type="checkbox" name="first" checked={state.first} onChange={HandleChange} ></input>
        </>
     );
}

export default ClassChoice;
