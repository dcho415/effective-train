import React, { Component } from 'react'

export default class ResultsHeading extends Component {

    render() {
        return (
            <div style={{width: '80%', float: 'right', padding: '10px'}}>
                    <div style={{width:'80%', float: 'left'}}>
                        <h1>{this.props.route}</h1>
                    </div>
                    <div style={{width: '20%', float: 'right', textAlign: 'center'}}>
                        {this.props.depDate}
                        <br/>
                        {this.props.retDate}
                    </div>
            </div>
        )
    }
}
