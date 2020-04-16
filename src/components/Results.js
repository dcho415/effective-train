import React, { Component } from 'react';

export default class Results extends Component {
    render() {
        return (
            <div style={{width: '80%', float: 'right'}}>
                <div style={{width:'80%', float: 'left'}}>
                    <h1>Pune > Delhi > Pune</h1>
                </div>
                <div style={{width: '20%', float: 'right', textAlign: 'center'}}>
                    Depart : 2020-05-01
                    <br/>
                    Return : 2020-05-10
                </div>
            </div>
        )
    }
}
