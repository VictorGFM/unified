import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const SearchBarDiv = styled.div`
  position: relative;

  width: 530px;
  height: 34px;
  margin-left: 14px;
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 9px;

  font-size: 17px;

  border: solid ${COLORS.GREY.ONE} 1px;
  border-radius: 5px;
  box-sizing: border-box;
`

export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  right: 0px;

  height: 34px;
  margin-right: 7px;

  cursor: pointer;
`

export const SearchButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`
