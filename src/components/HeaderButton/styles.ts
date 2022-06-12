import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const HeaderButtonDiv = styled.div`
  position: relative;

  width: 55px;
  height: 50px;
`

export const Button = styled.div<{ isUserProfile: boolean; isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;
  border-radius: 25px;

  background-color: ${({ isSelected }) => (isSelected ? COLORS.PURPLE.TWO : COLORS.GREY.FOUR)};
  cursor: pointer;
  ${({ isUserProfile }) =>
    !isUserProfile &&
    `
    &:hover {
      background-color: ${COLORS.PURPLE.TWO};
      img {
        filter: invert(44%) sepia(88%) saturate(6134%) hue-rotate(266deg) brightness(94%)
          contrast(97%);
      }
    }`}
`

export const ButtonIcon = styled.img<{ isUserProfile: boolean; isSelected: boolean }>`
  height: ${({ isUserProfile }) => (isUserProfile ? '46px' : '26px')};
  ${({ isUserProfile }) =>
    isUserProfile &&
    `
    border: solid ${COLORS.GREY.ONE} 1px;
    border-radius: 25px;
     `};
  ${({ isSelected }) =>
    isSelected &&
    `
    filter: invert(44%) sepia(88%) saturate(6134%) hue-rotate(266deg) brightness(94%) contrast(97%);
     `};
`
