import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const ButtonBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;
  border-radius: 25px;

  background-color: ${COLORS.GREY.FOUR};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
  }
`

export const ButtonIcon = styled.img`
  width: 26px;
  height: 26px;
`
