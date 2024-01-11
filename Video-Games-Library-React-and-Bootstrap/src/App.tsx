import { Routes, Route, Navigate } from 'react-router-dom';

import Header from "./components/Header/Header"
import VideoGamesList from './components/VideoGamesList/VideoGamesList';
import SingleVideoGame from "./components/SingleVideoGame/SingleVideoGame"
import Footer from "./components/Footer/Footer"
import FormNewGame from "./components/FormNewGame/FormNewGame"

import { VideoGames } from './db/Videogames.db';
import { VideoGame } from './interfaces/interfaces';


function App() {

  const allVideoGames: VideoGame[] = VideoGames
  console.log (allVideoGames)
 
  return (
    
    <body>        
        <Header />
        
        <main className="d-flex flex-column align-items-center">      
          <Routes>
            <Route path="/videogames" element={<VideoGamesList allVideoGames={allVideoGames}/>} />       
            <Route path="/videogame/:id" element={<SingleVideoGame />} />
            <Route path="new" element={<FormNewGame />} />
            <Route path="*" element={<Navigate to="/videogames"/>}/>                 
          </Routes>
        </main>      
        <Footer />
    </body>

  )
}

export default App
