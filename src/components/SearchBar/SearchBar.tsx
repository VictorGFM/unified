import { SearchIcon } from '../../assets'
import { SearchBarDiv, SearchBarInput, SearchButton, SearchButtonIcon } from './styles'

interface SearchBarProps {
  className?: string
  placeholder?: string
}

const SearchBar = ({ className, placeholder }: SearchBarProps) => {
  return (
    <SearchBarDiv className={className}>
      <SearchBarInput placeholder={placeholder} />
      <SearchButton>
        <SearchButtonIcon src={SearchIcon} />
      </SearchButton>
    </SearchBarDiv>
  )
}

export default SearchBar
