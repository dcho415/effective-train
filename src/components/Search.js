import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Search extends Component {
    state = {
        origin: '',
        dest: '',
        depDate: '',
        retDate: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ origin: '', dest: '', depDate: '', retDate: '' });
    }

    render() {
        return (
            <div style={{padding: "20px", width: "20%", float: 'left'}}>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                            type="text" 
                            name="origin"
                            placeholder="Enter Origin City"
                            className="form-control"
                            onChange={this.onChange} 
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            name="dest"
                            placeholder="Enter Destination City"
                            className="form-control"
                            onChange={this.onChange} 
                        />
                    </div>
                    <div>
                        <label>Departure Date: </label>
                        <input 
                            type="date"
                            name="depDate"
                            className="form-control"  
                            onChange={this.onChange}    
                        />
                    </div>
                    <div>
                        <label>Return Date: </label>
                        <input 
                            type="date"
                            name="retDate"
                            className="form-control"
                            onChange={this.onChange}       
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}
