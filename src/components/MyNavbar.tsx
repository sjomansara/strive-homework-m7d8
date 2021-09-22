import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <Navbar bg="black" expand="lg">
        <Navbar.Brand href="#home" style={{color: "pink", fontWeight: "bold"}}>Music Search Engine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar