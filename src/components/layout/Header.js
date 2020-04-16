import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Flight Search Engine</h1>
        </header>
    )
}

const headerStyle = {
    background: '#fff',
    color: '#333',
    textAlign: 'left',
    padding: '20px'
}
