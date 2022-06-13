import {
  FilterBarDiv,
  SearchBarDiv,
  SearchBar,
  SearchButton,
  SearchButtonIcon,
  FilterButton,
  FilterButtonIcon,
} from './styles'
import { SearchIcon, FilterIcon } from '../../assets'

const FilterBar = () => {
  return (
    <FilterBarDiv>
      <SearchBarDiv>
        <SearchBar placeholder="Search..." />
        <SearchButton>
          <SearchButtonIcon src={SearchIcon} />
        </SearchButton>
      </SearchBarDiv>
      <FilterButton>
        <FilterButtonIcon src={FilterIcon} />
      </FilterButton>
    </FilterBarDiv>
  )
}

export default FilterBar
