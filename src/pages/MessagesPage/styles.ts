import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const MessagesPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MessagesDiv = styled.div`
  width: 1094px;
  height: 583px;
  margin: 27px 0px 40px 0px;

  background-color: ${COLORS.WHITE.ONE};
  border: solid ${COLORS.GREY.THREE} 1px;
  border-radius: 7px;
  box-sizing: border-box;
`
