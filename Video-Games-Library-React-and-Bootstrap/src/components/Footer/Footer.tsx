import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';

function Footer () {
    return (
        <footer className={styles.footerStyles}>
            <Container>
                <Row>
                    <Col md={4}>
                        <p className="text-decoration-none text-white fw-semibold h6">Contacto</p>
                        <p className="text-decoration-none text-white fw-lighter">Email: info@gameverse.com</p>
                        <p className="text-decoration-none text-white fw-lighter">Teléfono: (123) 456-7890</p>
                    </Col>
                    <Col md={4}>
                        <p className="text-decoration-none text-white fw-semibold h6">Enlaces top!</p>
                        <ul className="list-unstyled text-decoration-none">
                            <li><Link to="/" className="text-decoration-none text-white fw-lighter">Videojuegos</Link></li>
                            <li><Link to="/" className="text-decoration-none text-white fw-lighter d-block mt-2">Sobre nosotros</Link></li>
                            <li><Link to="/" className="text-decoration-none text-white fw-lighter d-block mt-2">Contacto</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <p className="text-decoration-none text-white fw-semibold h6">Síguenos!</p>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none text-white fw-lighter">Facebook</Link></li>
                            <li><Link to="/" className="text-decoration-none text-white fw-lighter d-block mt-2">Twitter</Link></li>
                            <li><Link to="/" className="text-decoration-none text-white fw-lighter d-block mt-2">Instagram</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center text-white fw-lighter mt-3">
                        <p>&copy; 2024 GameVerse. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>           
        </footer>        
    )
}

export default Footer

    
    
