import React, { Component } from 'react';

export default class Results extends Component {
    render() {
        if(this.props.isLoading) {
            return "Loading..."
        }
        if(this.props.error) {
            return <p>{this.state.error.message}</p>
        }
        return '';
    }
}
