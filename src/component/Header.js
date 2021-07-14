import React from 'react'
import { Breadcrumb, Card, Navbar, Container } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Collapse className="justify-content-start">
                    <Navbar.Text>
                        GSTIN:29APAPB5521J1Z4
                    </Navbar.Text>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                    <h2>Indushree Enterpraises</h2>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Ph:6363585927 <br />
                        7795290146
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
