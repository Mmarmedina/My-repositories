import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function VideoGameItem () {

    return (
        <article className="container">
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 15 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1697219877546-5d8efced181d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </article>        
    );
    
}

export default VideoGameItem