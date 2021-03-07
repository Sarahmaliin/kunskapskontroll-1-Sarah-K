import React from 'react';

function DoneBtn (props){


    const array = [
        props.class,
        props.tickets,
        props.title,
        props.firstName,
        props.lastName,
        props.approved
    ]

    


        return ( 
            <section>
                <button className="DoneBtn" onClick={() => {console.log(array)}}>Boka biljetter</button> 
            </section>      
         );
            
        }
    

            

 
export default DoneBtn;