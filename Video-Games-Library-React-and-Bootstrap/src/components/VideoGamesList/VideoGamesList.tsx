import { VIDEOGAMES } from '../../db/Videogames.db'

function VideoGamesList () {

    // MMM Este es el estado que modifica el array
    // const [allVideoGames, setAllVideoGames] = React.useState<VideoGame[]>([])


    return (
        
      <section>
        {
          VIDEOGAMES.map(videogame => <p key={videogame.id}>{videogame.title} - <span>{videogame.genre}</span></p>)
        }
      </section>

    )
       
}

 

export default VideoGamesList


