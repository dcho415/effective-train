import React, { Component } from 'react';
import ResultItem from './ResultItem';

export default class Results extends Component {
    render() {
        if(this.props.isLoading) {
            return "Loading..."
        }
        if(this.props.error) {
            return <p>{this.state.error.message}</p>
        } else {
            return (
                <React.Fragment>
                    <ResultItem />
                    <ResultItem />
                    <ResultItem />
                </React.Fragment>
                
            );
        };
    }
}
