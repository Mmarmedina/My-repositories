import { useState } from "react";

// import { nanoid } from "nanoid";


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styles from './FormNewGame.module.css'


function FormNewGame () {

    const [inputValues, setInputValues] = useState ({        
        title: '',
        releaseDate: '',
        pegi: '',
        genre: '',
        publisher: '',
        price: '',
        img: ''
    });


    const [validated, setValidated] = useState(false); 
    
    const [isInvalid, setIsInvalid] = useState(false)
    

    function handleOnSubmit (event: any) {   

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setIsInvalid(!isInvalid)
        }
        setValidated(true);
    }

    function handleInputChange (event: any) {

        event.preventDefault()

        setInputValues( { ...inputValues, [event.target.name]: event.target.value})

        console.log (inputValues)       

        console.log ('Está esta guardando el form') 

    }

    return (

        <div className={styles.container}>
             <header>              
                <h1 className={styles.title}>Añade un nuevo videojuego a tu biblioteca</h1>
            </header>            
            <main>
                <Form noValidate validated={validated} onSubmit={handleOnSubmit}>         
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
                        { isInvalid && <span>El campo es obligatorio</span> }
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
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 w-50">
                        <Form.Group as={Col} controlId="pegi">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Edad recomendada</Form.Label>
                            <Form.Select defaultValue="Selecciona..."
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
                    </Row>

                    <Row className="mb-3">                                
                        <Form.Group as={Col} controlId="genre">
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Género</Form.Label>
                            <Form.Select defaultValue="Selecciona..."
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

                        <Form.Group as={Col} controlId="publisher" required>
                            <Form.Label column="sm" lg={5} className={styles.formLabel}>Autor</Form.Label>
                            <Form.Select defaultValue="Selecciona..."
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
                    </Row>              
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </main>
        </div>
    );
}

export default FormNewGame


