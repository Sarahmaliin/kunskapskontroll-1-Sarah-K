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
            <>
            <button onClick={() => this.setState({ Done: true})}>Boka biljetter</button>
            
            </>
         );
    }
}
 
export default DoneBtn;