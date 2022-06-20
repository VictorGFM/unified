import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const MessagesPageDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const MessagesDiv = styled.div`
  display: flex;

  width: 1094px;
  height: 583px;
  margin: 27px 0px 27px 0px;

  background-color: ${COLORS.WHITE.ONE};
  border: solid ${COLORS.GREY.THREE} 1px;
  border-radius: 7px;
  box-sizing: border-box;
`
