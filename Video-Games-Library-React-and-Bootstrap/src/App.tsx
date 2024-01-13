import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from "./components/Header/Header"
import VideoGamesList from './components/VideoGamesList/VideoGamesList';
import SingleVideoGame from "./components/SingleVideoGame/SingleVideoGame"
import Footer from "./components/Footer/Footer"
import FormNewGame from "./components/FormNewGame/FormNewGame"

import { VideoGames } from './db/Videogames.db';
import { VideoGame } from './interfaces/interfaces';
import MainMenu from './components/Nav/Main.Menu';


function App() {

  const getVideoGamesFromLocalStorage = (): VideoGame[] => {
    const data = window.localStorage.getItem('allVideoGames')
    return data ? JSON.parse(data) : VideoGames
  }  
  
  const updateVideoGamesToLocalStorage = (videoGames: VideoGame[]) => {
    window.localStorage.setItem('allVideoGames', JSON.stringify(videoGames))
  }
  
  const [allVideoGames, setAllVideoGames] = useState<VideoGame[]>(getVideoGamesFromLocalStorage())

  useEffect(() => {
    const data = getVideoGamesFromLocalStorage()
    setAllVideoGames(data)
  }, [])

  useEffect(() => {
    // Actualizar el localStorage cada vez que allVideoGames cambie.
    updateVideoGamesToLocalStorage(allVideoGames)
  }, [allVideoGames])


   
  // MMM Método 1
    // useEffect (() => {
    //   const data = window.localStorage.getItem('allVideoGames')
    //   if (data !== null) setAllVideoGames (JSON.parse(data))
    // }, []) 

    // useEffect (() => {
    //   const data = JSON.stringify(allVideoGames)
    //   window.localStorage.setItem('allVideoGames', data)
    // }, [allVideoGames])
  

  // MMM Método 2
    // useEffect(() => {
    //   const data = window.localStorage.getItem('allVideoGames')
    //   if (data !== null) {
    //     setAllVideoGames(JSON.parse(data));
    //   }
    // }, [])
    
    // useEffect(() => {
    //   const data = JSON.stringify(allVideoGames);
    //   window.localStorage.setItem('allVideoGames', data);
    // }, [allVideoGames]) 


  function addNewVideoGame (newVideoGame: VideoGame) {
    // MMM
    // setAllVideoGames([...allVideoGames, newVideoGame]);
    setAllVideoGames((prevAllVideoGames) => [...prevAllVideoGames, newVideoGame])
    alert(`¡Enhorabuena, el videojuego se ha añadido a tu biblioteca!\n${JSON.stringify(newVideoGame)}`) 
    console.log (allVideoGames)   
  }

  return (    
    <body>
        <MainMenu />    
        <main className="d-flex flex-column align-items-center">      
          <Routes>
            <Route path="/videogames" element={
              <>
                <Header />
                <VideoGamesList allVideoGames={allVideoGames} />                
              </>
            }/>
            <Route path="/videogame/:id" element={<SingleVideoGame allVideoGames={allVideoGames} />} />
            <Route path="/new" element={<FormNewGame addNewVideoGame={addNewVideoGame} />} />
            <Route path="*" element={<Navigate to="/videogames"/>}/>                 
           </Routes>
         </main>      
         <Footer />
       </body>         
  )                 
}      

export default App
