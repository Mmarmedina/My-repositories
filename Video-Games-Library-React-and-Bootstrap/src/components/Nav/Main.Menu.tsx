import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">      
      <Container>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-3">              
              <Nav.Link href="/videogames" className="px-3">Mis juegos</Nav.Link>
              <Nav.Link href="/new" className="bg-warning btn btn-primary">+New Game</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>        
      </Container>
      <Container className='w-25'>
        <Navbar.Brand className="d-none d-lg-block" href="/videogames">GameVerse</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default MainMenu