import Card from 'react-bootstrap/Card';
import { VideoGameItemProps } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function VideoGameItem ({ videogame }: VideoGameItemProps ) {

    return (
        <Link className="text-decoration-none" to={`/videogames/${videogame.id}`}>
            <article className="col-12 col-lg-6 container">
                <Card style={{ width: '100%'}}>
                    <Card.Img variant="top" src={videogame.img}/>
                    <Card.Body>
                        <Card.Title>{videogame.title}</Card.Title>
                        <Card.Text>
                        {videogame.excerpt}
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: 'var(--main-color-purple)' }}>+ Info</Button>
                    </Card.Body>
                </Card>
            </article> 
        </Link>       

        
    );
    
}

export default VideoGameItem