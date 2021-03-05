import React, { useState } from 'react';

const DropDown = () =>{
    const [state, setState] = useState({
        tickets: "1",
        title: "Ms"
    })

    const HandleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    };
    
          return ( 
            <section className="DropSelect">
            <label className="small-text many">Antal biljetter</label>
            <label className="small-text title">Titel</label>
            <select className="DropDown DropDown-tickets" name="tickets" onChange={HandleChange} value={state.tickets}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select> 

              <select className="DropDown DropDown-title" name="title" onChange={HandleChange} value={state.title}>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Mr">Mr</option>
                  <option value="Non-Binary">Non-Binary</option>
              </select>
              </section>
           );
      }
  
   
  export default DropDown;