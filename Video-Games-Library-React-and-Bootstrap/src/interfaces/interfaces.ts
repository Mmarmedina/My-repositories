interface VideoGame {
    id: number
    title: string
    releaseDate: string
    pegi: number
    genre: string
    publisher: string
    price: number
    img: string
}

interface VideoGameListProps {
    VIDEOGAMES: VideoGame[];
}

interface VideoGameItemProps {
    videogame: VideoGame;
}

export type {VideoGame, VideoGameListProps, VideoGameItemProps}


