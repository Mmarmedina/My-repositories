interface VideoGame {
    id: number
    title: string
    author: '' | 'GamerGuru' | 'JoystickJunkie' | 'El Rubius' | 'GameGazer' | 'PlaytimePro'
    releaseDate: string
    pegi: number
    genre: string
    publisher: string
    price: number
    img: string
}

export type {VideoGame}


