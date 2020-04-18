import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from './Form';
import FormBoot from 'react-bootstrap/Form';

export default class Search extends Component {
    render() {
        return (
            <div style={{ width: "20%", float: 'left' }}>
                <Tabs defaultActiveKey="oneWay" id="uncontrolled-tab-example" onSelect={this.props.onSelect} >
                    <Tab eventKey="oneWay" title="One Way">
                        <Form isReturn = {false} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                    </Tab>
                    <Tab eventKey="return" title="Return">
                        <Form isReturn = {true} onChange={this.props.onChange} onSubmit={this.props.onSubmit} />
                    </Tab>
                </Tabs>
                <div style={{ padding: '20px' }}>
                    <h5>Refine Flight Search</h5>
                    <FormBoot.Control 
                        name="costMax"
                        type="range" 
                        min="0" 
                        max="5000"
                        onChange={this.props.onChange} 
                        defaultValue="5000"
                    />
                    {"NZD" + this.props.costMax}
                </div>
            </div>               
        )
    }
}