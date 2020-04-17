import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from './Form';

export default class Search extends Component {
    state = {
        origin: '',
        dest: '',
        depDate: '',
        retDate: '',
        passengers: '', 
        isReturn: false
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ origin: '', dest: '', depDate: '', retDate: '', passengers: '', isReturn: false });
    }

    onSelect = (e) => this.setState({ isReturn: e==="return" });

    render() {
        return (
            <div  style={{ width: "20%", float: 'left' }}>
                <Tabs defaultActiveKey="oneWay" id="uncontrolled-tab-example" onSelect={this.onSelect} >
                    <Tab eventKey="oneWay" title="One Way">
                        <Form isReturn = {this.state.isReturn} onChange={this.onChange} onSubmit={this.onSubmit} />
                    </Tab>
                    <Tab eventKey="return" title="Return">
                        <Form isReturn = {this.state.isReturn} onChange={this.onChange} onSubmit={this.onSubmit} />
                    </Tab>
                </Tabs>
            </div>
                  
        )
    }


}