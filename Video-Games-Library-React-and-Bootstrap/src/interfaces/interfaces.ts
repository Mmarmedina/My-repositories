
// MMM añadir excerpt
// interface VideoGame {
//     id: string
//     title: string
//     excerpt: string
//     releaseDate: string
//     pegi: string
//     genre: string
//     publisher: string
//     price: number
//     img: string
// }

interface NewVideoGame {
    id: string
    title: string
    excerpt: string
    releaseDate: string
    pegi: '' | '3+' | '7+' | '12+' | '16+' | '18+'
    genre: '' | 'Acción' | 'Aventura' | 'Estrategia' | 'Shooter' | 'Otros'
    publisher: '' | 'GamerGuru' | 'El Rubius' | 'GameGazer' | 'PlaytimePro'
    price: number
    img: string    
}

interface VideoGame {
    id: string
    title: string
    excerpt: string
    releaseDate: string
    pegi: string
    genre: string
    publisher: string
    price: number
    img: string
}

interface VideoGameListProps {
    allVideoGames: VideoGame[]
}

interface VideoGameItemProps {
    videogame: VideoGame
}

interface SingleVideoGameProps {
    allVideoGames: VideoGame[]
}

interface NewVideoGameProps {
    addNewVideoGame: (videogame: VideoGame) =>void
}


export type {VideoGame, NewVideoGame, VideoGameListProps, VideoGameItemProps, SingleVideoGameProps, NewVideoGameProps}


