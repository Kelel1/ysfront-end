import '../App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
const Navbars = () => {

    return (
       
        <Navbar bg="yardGreen" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">YardSold </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Sign Up</Nav.Link>
                    <Nav.Link href="#link">Sign In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navbars;