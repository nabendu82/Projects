import React, { Component } from 'react';
import firebase from 'firebase';
import Data from './Data';
import './SignUp.css'

require('firebase/firestore')

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

class SignUp extends Component {
    constructor(props){
        super(props);
        this.userSignUp = this.userSignUp.bind(this);
        this.state = {isLoggedIn: false};
    }

    
    async userSignUp(e){
        e.preventDefault();
        await firebase.auth()
                      .signInWithPopup(googleProvider)
                      .then( result => {
                        var token = result.credential.accessToken;
                        var user = result.user;
                        // document.getElementById('quickstart-oauthtoken').textContent = "loggedIn";
                        this.setState({isLoggedIn: true});
                      })
					  .catch(e => console.log(e.message)
					  );
    }
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let showData = null;
        if (isLoggedIn) {
            showData = <Data/>
        } else {
            showData = <a className="styleSignup" onClick={this.userSignUp}> Sign Up </a>;
        }

        return (
            <div>
                {showData}
            </div>
        );
    }
  }

export default SignUp;
