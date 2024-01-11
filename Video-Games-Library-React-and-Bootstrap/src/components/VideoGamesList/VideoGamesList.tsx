import VideoGameItem from '../VideoGameItem/VideoGameItem'

import { VideoGameListProps } from '../../interfaces/interfaces'

function VideoGamesList ( { VIDEOGAMES }: VideoGameListProps) {

    // MMM Este es el estado que modifica el array
    // const [allVideoGames, setAllVideoGames] = React.useState<VideoGame[]>([])
    return (
        
      <section>
        {
          VIDEOGAMES.map(videogame => <VideoGameItem key={videogame.id} VIDEOGAMES={VIDEOGAMES} />)
        }
      </section>

      // <section>
      // {
      //   VIDEOGAMES.map(videogame => <p key={videogame.id}>{videogame.title} - <span>{videogame.genre}</span></p>)
      // }
      // </section>

      
      

    )
       
}

 

export default VideoGamesList


