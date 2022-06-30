import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from './Button'

import '../styles/sidebar.scss'
import { api } from '../services/api'

interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

interface SidebarProps {
  selectedGenreId: number
  setSelectedGenreId: Dispatch<SetStateAction<number>>
  setSelectedGenre: Dispatch<SetStateAction<GenreResponseProps>>
}

const SideBar = ({ selectedGenreId, setSelectedGenreId, setSelectedGenre }: SidebarProps) => {
  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  const handleClickButton = (id: number) => {
    setSelectedGenreId(id)
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data)
    })
  }, [selectedGenreId])

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}

export default SideBar
