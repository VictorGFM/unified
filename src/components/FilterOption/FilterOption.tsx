import { useState } from 'react'
import { CheckIcon } from '../../assets'
import { FilterCheckbox, FilterCheckedImage, FilterLabel, FilterOptionDiv } from './styles'

interface FilterOptionsProps {
  filterLabel: string
}

const FilterOption = ({ filterLabel }: FilterOptionsProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <FilterOptionDiv>
      <FilterCheckbox isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}>
        <FilterCheckedImage src={CheckIcon} />
      </FilterCheckbox>
      <FilterLabel>{filterLabel}</FilterLabel>
    </FilterOptionDiv>
  )
}

export default FilterOption
