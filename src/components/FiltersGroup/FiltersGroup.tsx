import FilterOption from '../FilterOption'
import { FilterOptionsDiv, FiltersGroupDiv, FiltersGroupLabel, HorizontalLine } from './styles'

export interface Filter {
  id: string
  label: string
}

interface FiltersGroupProps {
  label: string
  filters: Filter[]
  handleFilters: (operation: string, type: string, filterLabel: string) => void
}

const FiltersGroup = ({ label, filters, handleFilters }: FiltersGroupProps) => {
  return (
    <FiltersGroupDiv>
      <FiltersGroupLabel>{label}</FiltersGroupLabel>
      <HorizontalLine />
      <FilterOptionsDiv>
        {filters?.map((filter, index) => (
          <FilterOption
            key={filter.id}
            type={label}
            filterLabel={filter.label}
            handleFilters={handleFilters}
            dataCY={`filter-option-${label.toLowerCase()}-${index}`}
          />
        ))}
      </FilterOptionsDiv>
    </FiltersGroupDiv>
  )
}

export default FiltersGroup
