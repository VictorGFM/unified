import FilterOption from '../FilterOption'
import { FilterOptionsDiv, FiltersGroupDiv, FiltersGroupLabel, HorizontalLine } from './styles'

export interface Filter {
  id: string
  label: string
}

interface FiltersGroupProps {
  label: string
  filters: Filter[]
}

const FiltersGroup = ({ label, filters }: FiltersGroupProps) => {
  return (
    <FiltersGroupDiv>
      <FiltersGroupLabel>{label}</FiltersGroupLabel>
      <HorizontalLine />
      <FilterOptionsDiv>
        {filters?.map(filter => (
          <FilterOption key={filter.id} filterLabel={filter.label} />
        ))}
      </FilterOptionsDiv>
    </FiltersGroupDiv>
  )
}

export default FiltersGroup
