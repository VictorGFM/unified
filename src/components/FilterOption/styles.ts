import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const FilterOptionDiv = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 12px;
`

export const FilterCheckbox = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border: 1px solid;
  margin-right: 5px;

  border-radius: 3px;
  cursor: pointer;

  ${({ isChecked }) =>
    isChecked &&
    `
    background-color: ${COLORS.PURPLE.ONE};
  `}
`

export const FilterCheckedImage = styled.img``

export const FilterLabel = styled.span`
  font-size: 12px;
  line-height: 14px;
`
