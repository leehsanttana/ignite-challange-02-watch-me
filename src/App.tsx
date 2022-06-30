import { useEffect, useState } from 'react'

import { Button } from './components/Button'
import { MovieCard } from './components/MovieCard'

import './styles/global.scss'

import SideBar from './components/SideBar'
import Content from './components/Content'

export interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps)

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
        setSelectedGenre={setSelectedGenre}
      />
      <Content selectedGenreId={selectedGenreId} selectedGenre={selectedGenre} />
    </div>
  )
}
