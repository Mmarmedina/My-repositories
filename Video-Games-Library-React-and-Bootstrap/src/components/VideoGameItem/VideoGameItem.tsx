import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VideoGameItemProps } from '../../interfaces/interfaces';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function VideoGameItem ({ allVideoGames, videogame }: VideoGameItemProps ) {
    
    useEffect(() => {  
        
    }, [allVideoGames])

    return (
        <Link className="text-decoration-none" to={`/videogame/${videogame.id}`}>
            <article className="col-12 col-lg-6 container fs-6">
                <Card style={{ width: '100%', fontSize: '0.9rem', fontStyle: 'italic'}}>
                    <Card.Img variant="top" src={videogame.img}/>
                    <Card.Body>
                        <Card.Title>{videogame.title}</Card.Title>
                        <Card.Text>
                        {videogame.excerpt}
                        </Card.Text>
                        <Button variant="btn btn-warning">+ Info</Button>
                    </Card.Body>
                </Card>
            </article> 
        </Link>        
    );

}

export default VideoGameItem