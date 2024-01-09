import { useState } from "react"

import { nanoid } from "nanoid";

import { Button } from "react-bootstrap";

import styles from './FormNewGame.modole.css'


function FormNewGame () {

    const [inputValues, setInputValues] = useState ({        
        title: '',
        releaseDate: '',
        pegi: '',
        genre: '',
        publisher: '',
        price: ''
    })

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {

        event.preventDefault()

       
        
        setInputValues( { ...inputValues, [event.target.name]: event.target.value})
        console.log (inputValues)

    }

    return (

        <>  
            <main>            
                <form className="container d-flex flex-column">
                    
                    <div>
                        <input                        
                            className="mb-3"
                            type="text"
                            placeholder="Escribe el título del vídeojuego"
                            name="title"
                            value={inputValues.title}
                            onChange={(e) => handleInputChange(e)}                                 
                        />
                    </div>                                     
                    <div>
                        <input 
                            className="mb-3"
                            type="date"
                            placeholder="Fecha lanzamiento"
                            name="releaseDate"
                            value={inputValues.releaseDate}
                            onChange={(e) => handleInputChange(e)}                                 
                        />
                    </div>
                    
                    <div>
                        <select
                        className="mb-3"
                            title="pegi"
                            name="pegi"
                            value={inputValues.pegi}
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="">Edad recomendada</option>
                            <option value="1">3+</option>
                            <option value="2">7+</option>
                            <option value="3">12+</option>
                            <option value="4">16+</option>
                            <option value="5">18+</option>
                        </select>
                    </div>

                    <div>
                        <select 
                            className="mb-3"
                            title="genre"
                            name="genre"
                            value={inputValues.genre}
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="0">Género</option>
                            <option value="1">Acción</option>
                            <option value="2">Aventura</option>
                            <option value="3">Estrategia</option>
                            <option value="4">Shooter</option>
                        </select>                        
                    </div>

                    <div>
                        <select 
                            className="mb-3"
                            title="publisher"
                            name="publisher"
                            value={inputValues.publisher}
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="1">GamerGuru</option>
                            <option value="2">El Rubius</option>
                            <option value="3">GameGazer</option>
                            <option value="4">PlaytimePro</option>
                        </select>                        
                    </div>
                    <div>
                        <label className="d-block" htmlFor="price">Precio</label>
                        <input
                            className="mb-3"
                            type="number"
                            placeholder="0.00"
                            name="price"
                            step="0.01"
                            min="0.01"
                            value={inputValues.price}
                            onChange={(e) => handleInputChange(e)}                                 
                        />                       
                    </div>   
                    <Button variant="primary">Primary</Button>{' '}          
                </form>
            </main>
        </>

    );

}

export default FormNewGame


