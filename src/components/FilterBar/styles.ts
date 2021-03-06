import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const FilterBarDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;

  width: 600px;
  height: 56px;
  margin-top: 15px;

  background-color: ${COLORS.WHITE.ONE};
  border: solid ${COLORS.GREY.THREE} 1px;
  border-radius: 7px;
  box-sizing: border-box;

  ${({ isOpen }) =>
    isOpen &&
    `
    height: 200px;
  `}
`

export const FilterBarHeader = styled.div`
  display: flex;
  align-items: center;

  margin-top: 7px;
`

export const FilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-left: 7px;

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
    img {
      filter: invert(44%) sepia(88%) saturate(6134%) hue-rotate(266deg) brightness(94%)
        contrast(97%);
    }
  }
`

export const FilterButtonIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const FilterOptions = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;

  margin: 14px 63px 0px 23px;
  ${({ isOpen }) =>
    !isOpen &&
    `
    display: none;
  `}
`
