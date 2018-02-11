import React from "react";
import {Avatar, RaisedButton} from "material-ui";
import ShowImages from './ShowImages';
import {logout} from "../helpers/auth";
import {firebaseAuth} from "../config/constants";

const appTokenKey = "appToken"; // also duplicated in Login.js
export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // firebaseUser: JSON.parse(localStorage.getItem("displayName"))
            userName: '',
            photo: ''
        };

        //console.log("User:", this.state.firebaseUser);
        this.handleLogout = this.handleLogout.bind(this);


    }

    componentDidMount() {
        // firebaseAuth().onAuthStateChanged(user => {
        //     if (user) {
        //         console.log("User signed in from home: ", JSON.stringify(user));                
        //         this.setState({
        //             userName: user.displayName,
        //             photo: user.photoURL
        //         });
        //     }
        // });
        var user = firebaseAuth().currentUser;
            if (user) {
                console.log("User signed in from home: ", JSON.stringify(user));                
                this.setState({
                    userName: user.displayName,
                    photo: user.photoURL
                });
            } else {
                this.setState({
                    userName: 'default',
                    photo: 'default'
                });

            }
        

    }

    handleLogout() {
        logout().then(function () {
            localStorage.removeItem(appTokenKey);
            this.props.history.push("/login");
            console.log("user signed out from firebase");
        }.bind(this));

    }

    render() {
        return (
            <div>
                <h4>Welcome {this.state.userName} <Avatar src={this.state.photo}/></h4>
                
                <ShowImages/>

                <div>
                    <RaisedButton
                        backgroundColor="#a4c639"
                        labelColor="#ffffff"
                        label="Sign Out"
                        onTouchTap={this.handleLogout}
                    />
                </div>
            </div>
        );
    }
}