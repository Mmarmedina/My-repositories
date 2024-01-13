import { useEffect } from "react"
import VideoGameItem from "../VideoGameItem/VideoGameItem"
import { VideoGameListProps } from "../../interfaces/interfaces"


function VideoGamesList ({ allVideoGames }: VideoGameListProps) {

    useEffect(() => {

        console.log('El componente VideoGamesList se ha actualizado');    
        
    }, [allVideoGames])
      
    return (
        <section className="row g-5">
            {
                allVideoGames.map(videoGame => <VideoGameItem key={videoGame.id} allVideoGames={allVideoGames} videogame={videoGame} />)     
            }
        </section>       
    )
}

export default VideoGamesList