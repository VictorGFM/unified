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

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FilterBarDiv isOpen={isOpen}>
      <FilterBarHeader>
        <InputBar icon={SearchIcon} placeholder="Search..." />
        <FilterButton onClick={() => setIsOpen(!isOpen)}>
          <FilterButtonIcon src={FilterIcon} />
        </FilterButton>
      </FilterBarHeader>
      <FilterOptions isOpen={isOpen}>
        <FiltersGroup label="Posts" filters={Filters['Posts']} />
        <FiltersGroup label="Groups" filters={Filters['Groups']} />
        <FiltersGroup label="Others" filters={Filters['Others']} />
      </FilterOptions>
    </FilterBarDiv>
  )
}

export default FilterBar
