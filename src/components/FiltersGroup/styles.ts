import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const FiltersGroupDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 144px;
  height: 135px;
`

export const FiltersGroupLabel = styled.span`
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  margin: 0px 0px 7px 0px;
`

export const FilterOptionsDiv = styled.div`
  height: 100%;
  padding-left: 5px;

  overflow: scroll;
  overflow-x: hidden;
`
