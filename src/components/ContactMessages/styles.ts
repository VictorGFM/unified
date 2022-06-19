import styled from 'styled-components'
import { COLORS } from '../../styles/global'
import SearchBar from '../SearchBar'

export const ContactMessagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 350px;
  border-right: solid ${COLORS.GREY.THREE} 1px;
`

export const MessagesTitle = styled.span`
  padding: 22px 115px;

  font-size: 26px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
`

export const MessagesSearchBar = styled(SearchBar)`
  width: 326px;
  height: 34px;
  margin-left: 7px;
  margin-bottom: 7px;
`

export const ContactCardDiv = styled.div`
  height: 466px;
  overflow: auto;
`
