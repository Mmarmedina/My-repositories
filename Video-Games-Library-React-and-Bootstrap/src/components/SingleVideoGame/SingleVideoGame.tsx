import { useParams } from 'react-router-dom';
import { SingleVideoGameProps } from '../../interfaces/interfaces';
import Card from 'react-bootstrap/Card';
import styles from './SingleVideoGame.module.css';

function SingleVideoGame ({ allVideoGames }: SingleVideoGameProps) {

    const params = useParams()
    if (params.id === undefined) return    

    const detailVideoGame = allVideoGames.find (game => game.id === params.id)   
    
    return (       
        <main className="w-75 my-4">        
            <Card style={{ width: '100%', background: 'var(--secondary-color-grey)'}}>
                <Card.Body >
                    <Card.Title>
                        <p className={styles.title}>{detailVideoGame?.title}</p>
                    </Card.Title>                                           
                    <Card.Text>
                        <p className={styles.styleInfoDetail}>{detailVideoGame?.excerpt}</p>
                        <p className={styles.styleInfoDetail}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus magnam incidunt, ipsam veniam ipsum laudantium est, doloribus quisquam ex vitae suscipit ducimus corporis voluptatem vel iste. Animi velit libero quas! 
                        Enim nostrum autem itaque consequatur, eius repudiandae vitae quisquam sapiente ex doloribus aut, laborum provident, placeat quas explicabo animi! Aspernatur id impedit nemo beatae eius eos consequuntur accusantium exercitationem! Harum!
                        Officia voluptatibus commodi velit inventore necessitatibus nam doloribus dolorum similique ducimus quibusdam veniam mollitia, aspernatur corrupti? Sapiente eius error facere, nemo maiores, distinctio, eveniet quo temporibus incidunt ex in id
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <span className={styles.styleInfoDetail}>Género: {detailVideoGame?.genre}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className={styles.styleInfoDetail}>Desarrollador: {detailVideoGame?.publisher}</span>
                        </Card.Text>
                    <Card.Text>
                        <span className={styles.styleInfoDetail}>Fecha de lanzamiento: {detailVideoGame?.releaseDate}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className={styles.styleInfoDetail}>Precio: {detailVideoGame?.price}€</span>
                    </Card.Text>
                    <Card.Text>
                        <span className={styles.styleInfoDetail}>Edad recomendada: +{detailVideoGame?.pegi}</span>
                    </Card.Text>                
                </Card.Body>
                <Card.Body className={styles.imgContainer}>
                    <Card.Img variant="top" src={detailVideoGame?.img} />                          
                </Card.Body>                            
            </Card>
        </main>        
    )
}

export default SingleVideoGame