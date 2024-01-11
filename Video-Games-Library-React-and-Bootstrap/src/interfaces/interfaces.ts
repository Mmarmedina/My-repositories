interface VideoGame {
    id: number
    title: string
    excerpt: string
    releaseDate: string
    pegi: number
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

export type {VideoGame, VideoGameListProps, VideoGameItemProps}


