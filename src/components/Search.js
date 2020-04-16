import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div style={{padding: "20px", outline: "1px solid blue"}}>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                            type="text" 
                            name="origin" 
                            style={{ padding: '5px' }}
                            placeholder="Enter Origin City"
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            name="dest"
                            style={{ padding: '5px' }}
                            placeholder="Enter Destination City"
                        />
                    </div>
                    <div>
                        <label>Departure Date</label>
                        <input 
                            type="date"      
                        />
                    </div>
                </form>
            </div>
        )
    }
}
