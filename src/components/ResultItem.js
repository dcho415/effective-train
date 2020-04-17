import React, { Component } from 'react'

export default class ResultItem extends Component {
    render() {
        return (
            <div style={divStyle}>
                <div>
                    <h2>NZD100</h2>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                    Al-202
                    <h5>PNQ>DEL</h5>
                    <h6>Depart: 10:00 AM</h6>
                    <h6>Arrive: 12:00 PM</h6>
                </div>
                <div style={{width: '50%', float: 'right'}}>
                    Al-203
                    <h5>DEL>PNQ</h5>
                    <h6>Depart: 08:00 PM</h6>
                    <h6>Arrive: 11:00 PM</h6>
                </div>
                <button className="btn btn-primary">Book Flight</button>
            </div>
        )
    }
}

const divStyle = {
    outline: '1px solid black', 
    height: 'auto', 
    width: '78%', 
    float: 'right', 
    padding: '10px', 
    margin: '1%'
}
