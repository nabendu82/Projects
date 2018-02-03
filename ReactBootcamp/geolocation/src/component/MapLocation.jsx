import React from 'react';

function MapLocation(props) {
    const latitude = props.lat;
    const longitude = props.lon;
    // let img = new Image();
    return (  
        <img src={"https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false"} alt="Google map"/>
    );
}

export default MapLocation;