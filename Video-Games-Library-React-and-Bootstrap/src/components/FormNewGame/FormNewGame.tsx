import { useState } from "react";
import { NewVideoGame, VideoGame, FormNewGameProps } from "../../interfaces/interfaces";
import { nanoid } from "nanoid";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './FormNewGame.module.css';


function FormNewGame ({ addNewVideoGame} : FormNewGameProps) {
  
    const [inputValues, setInputValues] = useState<NewVideoGame> ({        
        id: '',
        title: '',
        excerpt: '',
        releaseDate: '',
        pegi: '',
        genre: '',
        publisher: '',
        price: 0,
        img: ''
    })

    const [validated, setValidated] = useState<boolean>(false)

    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/i    

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
        setInputValues( { ...inputValues, [event.target.name]: event.target.value})              
    }

    function handleAddNewGame (event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault() 
              
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();        
        }
        
        setValidated(true);

        if (
            inputValues.title.trim() ===  '' || 
            inputValues.releaseDate === '' ||
            inputValues.pegi === '' ||
            inputValues.genre === '' ||
            inputValues.publisher === '' ||
            inputValues.price === null ||
            inputValues.img.trim() === ''||
            !urlPattern.test(inputValues.img.trim())
        ) return

        const newVideoGame: VideoGame = {
            id: nanoid(),
            title: inputValues.title,
            excerpt: inputValues.excerpt,
            releaseDate: inputValues.releaseDate,
            pegi: inputValues.pegi,
            genre: inputValues.genre,
            publisher: inputValues.publisher,
            price: inputValues.price,
            img: inputValues.img
        }  
        
        addNewVideoGame(newVideoGame)

        setInputValues({
            id: '',
            title: '',
            excerpt: '',
            releaseDate: '',
            pegi: '',
            genre: '',
            publisher: '',
            price: 0,
            img: ''
        })        
    }
   
    return (
        <div className={styles.container}>
             <header>              
                <h1 className={styles.title}>Añade un nuevo videojuego a tu biblioteca</h1>
            </header>            
            <main>
                <Form noValidate validated={validated} onSubmit={handleAddNewGame}>        
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="title">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Título del vídeojuego</Form.Label>
                            <Form.Control                                
                                required
                                type="text"
                                size="sm" 
                                placeholder="Escribe el título del vídeojuego"
                                name="title"
                                value={inputValues.title}
                                onChange={(e) => handleInputChange(e)}
                            />                            
                        </Form.Group>                          
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="excerpt">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Resumen del videojuego</Form.Label>
                            <Form.Control                                
                                required
                                as="textarea"                                
                                size="sm" 
                                placeholder="¿De qué trata el videojuego?"
                                name="excerpt"
                                value={inputValues.excerpt}
                                onChange={(e) => handleInputChange(e)}
                            />                            
                        </Form.Group>                          
                    </Row>
                    <Row className="mb-3"> 
                        <Form.Group as={Col} controlId="releaseDate">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Fecha lanzamiento</Form.Label>
                            <Form.Control
                                required
                                size="sm"
                                type="date"
                                name="releaseDate"
                                value={inputValues.releaseDate}
                                onChange={(e) => handleInputChange(e)}                                 
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="price" className="w-25">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Precio (€)</Form.Label>
                            <Form.Control
                                required
                                size="sm" 
                                type="number" 
                                placeholder="Precio"
                                name="price"
                                step="0.01"
                                min="0.01"
                                max="200.00"
                                value={inputValues.price}
                                onChange={(e) => handleInputChange(e)}                             
                            />
                            { validated && <span className={styles.selectAlert}>Precio máx. 200 euros. <span className={styles.spanIcon}>💰</span></span> }
                        </Form.Group>                       
                    </Row>
                    <Row className="mb-3 w-50">
                        <Form.Group as={Col} controlId="pegi">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Edad recomendada</Form.Label>
                            <Form.Select 
                                defaultValue="Selecciona..."
                                required
                                size="sm"
                                name="pegi"
                                value={inputValues.pegi}
                                onChange={(e) => handleInputChange(e)}                    
                            >                     
                                <option>Selecciona PEGI</option>
                                <option value="3+">3+</option>
                                <option value="7+">7+</option>
                                <option value="12+">12+</option>
                                <option value="16+">16+</option>
                                <option value="18+">18+</option>
                            </Form.Select>
                        </Form.Group>
                        { validated && <span className={styles.selectAlert}>No olvides rellenar este campo <span className={styles.spanIcon}>🎮</span></span> }                     
                    </Row>
                    <Row className="mb-3">                                
                        <Form.Group as={Col} controlId="genre">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Género</Form.Label>
                            <Form.Select 
                                className={styles.selectStyle}
                                defaultValue="Selecciona..."
                                required
                                size="sm"
                                name="genre"
                                value={inputValues.genre}
                                onChange={(e) => handleInputChange(e)}                
                            >    
                                <option>Selecciona el género</option>                 
                                <option value="Acción">Acción</option>
                                <option value="Aventura">Aventura</option>
                                <option value="Estrategia">Estrategia</option>
                                <option value="Shooter">Shooter</option>
                                <option value="Otros">Otros</option>
                            </Form.Select>
                        </Form.Group>
                        { validated && <span className={styles.selectAlert}>No olvides rellenar este campo <span className={styles.spanIcon}>🎮</span></span> }
                        <Form.Group as={Col} controlId="publisher" required>
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Autor</Form.Label>
                            <Form.Select 
                                defaultValue="Selecciona..."
                                required
                                size="sm"
                                name="publisher"
                                value={inputValues.publisher}
                                onChange={(e) => handleInputChange(e)}                    
                            >                     
                                <option>Selecciona el editor</option>
                                <option value="GamerGuru">GamerGuru</option>
                                <option value="El Rubius">El Rubius</option>
                                <option value="GameGazer">GameGazer</option>
                                <option value="PlaytimePro">PlaytimePro</option>
                            </Form.Select>
                        </Form.Group>
                        { validated && <span className={styles.selectAlert}>No olvides rellenar este campo <span className={styles.spanIcon}>🎮</span></span> }
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="img">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Imagen</Form.Label>
                            <Form.Control 
                                required
                                size="sm"
                                type="url" 
                                placeholder="URL imagen del vídeojuego"
                                name="img"
                                value={inputValues.img}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Form.Group>
                        { validated && <span className={styles.selectAlert}>Asegúrate de añadir una imagen usando una URL válida <span className={styles.spanIcon}>🖱</span></span> }
                    </Row>              
                    <Button variant="dark" type="submit">
                        Añadir juego
                    </Button>
                </Form>
            </main>
        </div>
    )
}

export default FormNewGame


