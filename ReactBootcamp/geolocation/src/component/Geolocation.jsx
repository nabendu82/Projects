import React, { Component } from 'react';
import MapLocation from './MapLocation';
import { ControlLabel, FormControl, Col, Button } from 'react-bootstrap';

class Geolocation extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleIPAddress = this.handleIPAddress.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);
        this.state = {
            latitude: '',
            longitude: '',
            ipaddresss: '',
            gotCoordinates: false
        };
    }

    success(position) {
    this.setState({        
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        gotCoordinates: true
    });
   }

    error() {
        console.log("Unable to retrieve your location");
    }

    handleLoginClick() {
        navigator.geolocation.getCurrentPosition(this.success, this.error)        
    }

    handleIPAddress() {
        const url = "https://api.ipify.org?format=json";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                 this.setState({
                        ipaddresss: data.ip
                    });
                })
            .catch(error => console.log('Something went wrong', error));
        


    }

    render() {
        let gotCoordinates = this.state.gotCoordinates;
        let map = null;
        if(gotCoordinates) {
          map = <MapLocation lat={this.state.latitude} lon={this.state.longitude} /> 
        } 
        return(
            <div>
                <form>
                <ControlLabel>Latitude </ControlLabel>
                <FormControl
                    id="latname"
                    type="text"
                    value={this.state.latitude}
                    placeholder="Latitude"
                />
                <ControlLabel>Longitude </ControlLabel>
                <FormControl
                    id="lonname"
                    type="text"
                    value={this.state.longitude}
                    placeholder="longitude"
                />
                <ControlLabel>IP address </ControlLabel>
                <FormControl
                    id="ipname"
                    type="text"
                    value={this.state.ipaddresss}
                    placeholder="IP address"
                />
                {map}                          
                <Col smOffset={2} sm={10}>
                    <Button bsStyle="primary" onClick={this.handleLoginClick}>Location</Button>
                    <Button bsStyle="primary" onClick={this.handleIPAddress}>IP Address</Button>
                </Col>
                </form>
            </div>
        );
    }
}

export default Geolocation;