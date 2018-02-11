import React, { Component } from 'react';
import firebase from 'firebase';
import SignUp from './SignUp';
import ShowImages from './ShowImages';
import { Button } from 'react-bootstrap';
import './Data.css';


require('firebase/firestore')

const auth = firebase.auth();

class Data extends Component {
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
        this.state = {
            isLoggedOut: false,
            showButton: true
        };
    }

      signOut(){
        firebase.auth().signOut();
        this.setState({
            isLoggedOut: true,
            showButton: false
        });
	  }
    
      render() {
        const isLoggedOut = this.state.isLoggedOut;
        let showData = null;
        if (isLoggedOut) {
            showData = <SignUp/>            
        } else {
            showData = <ShowImages/>            
           
        }
        
        return (
         <div>
             {showData}
             {this.state.showButton ? <Button className="logoutBtn" bsSize="small" onClick={this.signOut}>Logout</Button> : null}
             
         </div>
        );
      }
}

export default Data;
