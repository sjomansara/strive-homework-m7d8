import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <Navbar bg="black" expand="lg">
        <Navbar.Brand href="#home" style={{color: "red", fontWeight: "bold"}}>Music Search Engine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color: "white"}}>Link</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar