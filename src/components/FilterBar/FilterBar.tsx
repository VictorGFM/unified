import {
  FilterBarDiv,
  FilterButton,
  FilterButtonIcon,
  FilterOptions,
  FilterBarHeader,
} from './styles'
import { SearchIcon, FilterIcon } from '../../assets'
import { useState } from 'react'
import FiltersGroup from '../FiltersGroup'
import { Filters } from './data'
import { Filter } from '../FiltersGroup/FiltersGroup'
import InputBar from '../InputBar'

export interface FiltersGroupsData {
  Posts: Filter[]
  Groups: Filter[]
  Others: Filter[]
}

interface FilterBarProps {
  handleFilters: (operation: string, type: string, filterLabel: string) => void
  searchText: string
  handleSearchBar: (event) => void
}

const FilterBar = ({ handleFilters, searchText, handleSearchBar }: FilterBarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FilterBarDiv isOpen={isOpen}>
      <FilterBarHeader>
        <InputBar
          icon={SearchIcon}
          value={searchText}
          placeholder="Search..."
          onChange={handleSearchBar}
          dataCY={`home-search-filter`}
        />
        <FilterButton onClick={() => setIsOpen(!isOpen)} data-cy={`filter-button`}>
          <FilterButtonIcon src={FilterIcon} />
        </FilterButton>
      </FilterBarHeader>
      <FilterOptions isOpen={isOpen}>
        <FiltersGroup label="Posts" filters={Filters['Posts']} handleFilters={handleFilters} />
        <FiltersGroup label="Groups" filters={Filters['Groups']} handleFilters={handleFilters} />
        <FiltersGroup label="Others" filters={Filters['Others']} handleFilters={handleFilters} />
      </FilterOptions>
    </FilterBarDiv>
  )
}

export default FilterBar
