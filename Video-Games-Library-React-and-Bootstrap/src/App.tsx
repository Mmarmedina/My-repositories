import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate} from 'react-router-dom';

import Header from "./components/Header/Header"
import VideoGamesList from './components/VideoGamesList/VideoGamesList';
import SingleVideoGame from "./components/SingleVideoGame/SingleVideoGame";
import Footer from "./components/Footer/Footer";
import FormNewGame from "./components/FormNewGame/FormNewGame";
import MainMenu from './components/Nav/Main.Menu';

import { VideoGames } from './db/Videogames.db';
import { VideoGame } from './interfaces/interfaces';



function App() {

  const getVideoGamesFromLocalStorage = (): VideoGame[] => {
    const data = window.localStorage.getItem('allVideoGames')
    return data ? JSON.parse(data) : VideoGames
  }
  
  const updateVideoGamesToLocalStorage = (videoGames: VideoGame[]) => {
    window.localStorage.setItem('allVideoGames', JSON.stringify(videoGames))
  }

  const [allVideoGames, setAllVideoGames] = useState<VideoGame[]>(getVideoGamesFromLocalStorage())
  const navigate = useNavigate()

  useEffect(() => {
    const data = getVideoGamesFromLocalStorage()
    setAllVideoGames(data)
  }, [])

  useEffect(() => {
    updateVideoGamesToLocalStorage(allVideoGames)
  }, [allVideoGames])



  function addNewVideoGame (newVideoGame: VideoGame) {
    setAllVideoGames((prevAllVideoGames) => [...prevAllVideoGames, newVideoGame])
    alert(`🎮 ¡Enhorabuena, el videojuego se ha añadido correctamente! 🎮\n\n${JSON.stringify(newVideoGame)}\n\n\¡Ya puedes verlo en tu biblioteca! 😇`)
    navigate('/videogames')    
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
