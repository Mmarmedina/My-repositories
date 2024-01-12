import { VideoGameListProps } from "../../interfaces/interfaces"
import VideoGameItem from "../VideoGameItem/VideoGameItem"


function VideoGamesList ({ allVideoGames }: VideoGameListProps) {

    return (
        <section className="row g-5">
            {
                allVideoGames.map(videoGame => <VideoGameItem key={videoGame.id} videogame={videoGame}/>)     
            }
        </section>       
    )
}

export default VideoGamesList