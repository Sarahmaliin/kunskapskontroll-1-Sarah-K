import React from 'react';

function DoneBtn (props){
    const array = { 
        class: props.class,
        tickets: props.tickets,
        title: props.title,
        firstName: props.firstName,
        lastName: props.lastName,
        ApproveTerms: props.approved
}
return ( 
            <section>
                <button className="DoneBtn" onClick={() => {console.log(array)}}>Boka biljetter</button> 
            </section>      
         );
}

        
            
        
    

            

 
export default DoneBtn;