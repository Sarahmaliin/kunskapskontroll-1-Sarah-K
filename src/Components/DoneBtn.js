import React, { Component } from 'react';

class DoneBtn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Done: false
         }
    }
    
    render() { 
        return ( 
            <section>
                <> 
                <button className="DoneBtn" onClick={() => this.setState({ Done: true})}>Boka biljetter</button>
                </> 

            </section>
                     
         );
    }
}
 
export default DoneBtn;