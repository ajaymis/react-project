import React from 'react'
import Col from "react-bootstrap/Col"
const Library = () => {
    return (
        <Col lg={4}>
            <h1 className="fw-bolder">Dog Health Library</h1>
        <ul>
            <li>Arthritis</li>
            <li>Canine Distemper</li>
            <li>Feline Distemper</li>
            <li>Canine Parvovirus</li>
            <li>Fleas</li>
            <li>Ticks</li>
            <li>Obesity</li>
        </ul>

        </Col>
    )
}

export default Library
