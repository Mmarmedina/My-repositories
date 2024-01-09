import { Routes, Route, Navigate } from 'react-router-dom';

import Header from "./components/Header/Header"
import VideoGamesList from "./components/VideoGamesList/VideoGamesList"
import SingleVideoGame from "./components/SingleVideoGame/SingleVideoGame"
import Footer from "./components/Footer/Footer"
import FormNewGame from "./components/FormNewGame/FormNewGame"



function App() {
  
 
  

  return (
    
    <div>
      <Header />
        <Routes>
          <Route path="/videogames" element={<VideoGamesList />} />
          <Route path="/videogame/:id" element={<SingleVideoGame />} />
          <Route path="new" element={<FormNewGame />} />
          <Route path="*" element={<Navigate to="/videogames"/>}/>                 
        </Routes>      
      <Footer />
    </div>   
    
  )
}

export default App
