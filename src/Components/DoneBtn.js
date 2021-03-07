import React from 'react';

function DoneBtn (props){


            return ( 
            <section>
                <button className="DoneBtn" onClick={() => {console.log(props.class, props.tickets, props.title, props.firstName, props.lastName, props.approved)}}>Boka biljetter</button> 
            </section>      
         );
            
        }

 
export default DoneBtn;