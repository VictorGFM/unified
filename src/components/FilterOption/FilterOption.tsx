import { useEffect, useState } from 'react'
import { CheckIcon } from '../../assets'
import { FilterCheckbox, FilterCheckedImage, FilterLabel, FilterOptionDiv } from './styles'

interface FilterOptionsProps {
  filterLabel: string
  type: string
  handleFilters: (operation: string, type: string, filterLabel: string) => void
  dataCY?: string
}

const FilterOption = ({ filterLabel, type, handleFilters, dataCY }: FilterOptionsProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    let label = filterLabel
    if (type === 'Posts') {
      label = filterLabel.split(' ')[0]
    }
    handleFilters(isChecked ? 'add' : 'remove', type, label)
  }, [isChecked])

  return (
    <FilterOptionDiv>
      <FilterCheckbox isChecked={isChecked} onClick={handleClickCheckbox} data-cy={dataCY}>
        <FilterCheckedImage src={CheckIcon} />
      </FilterCheckbox>
      <FilterLabel>{filterLabel}</FilterLabel>
    </FilterOptionDiv>
  )
}

export default FilterOption
