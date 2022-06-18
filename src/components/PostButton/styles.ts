import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const PostButtonDiv = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.div`
  position: relative;

  width: 30px;
  height: 30px;
  margin-right: 3px;

  cursor: pointer;
  border-radius: 100%;

  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
    img {
      filter: invert(44%) sepia(88%) saturate(6134%) hue-rotate(266deg) brightness(94%)
        contrast(97%);
    }
  }
`

export const ButtonImage = styled.img`
  position: absolute;
  left: 5px;
  top: 7px;

  width: 20px;
  height: 17px;
`

export const NumberInteractions = styled.span`
  font-size: 14px;
  line-height: 15px;
`
