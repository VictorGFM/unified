import styled from 'styled-components'
import { COLORS } from '../..//styles/global'

export const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 117px 1fr;
  grid-template-rows: 70px 1fr;

  width: 100%;
  height: 100%;
`

export const ContentDiv = styled.div`
  background-color: ${COLORS.GREY.SIX};

  overflow: auto;
`

export const TwitterApp = styled.img`
  width: 100%;
  height: 100%;
`
