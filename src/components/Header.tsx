import { GenreResponseProps } from '../App'

interface HeaderProps {
  selectedGenre: GenreResponseProps
}

const Header = ({ selectedGenre }: HeaderProps) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  )
}

export default Header
