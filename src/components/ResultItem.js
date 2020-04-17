import React, { Component } from 'react'

export default class ResultItem extends Component {
    render() {
        return (
            <div style={divStyle}>
                <div>
                    <h2>{this.props.cost}</h2>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                    {this.props.flightId}
                    <h5>{this.props.route}</h5>
                    <h6>{this.props.depTime}</h6>
                    <h6>{this.props.arrTime}</h6>
                </div>
                <div style={{width: '50%', float: 'right'}}>
                    {this.props.retFlightId}
                    <h5>{this.props.retRoute}</h5>
                    <h6>{this.props.retDepTime}</h6>
                    <h6>{this.props.retArrTime}</h6>
                </div>
                <button style = {{width: '100%'}} className="btn btn-primary">Book Flight</button>
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
