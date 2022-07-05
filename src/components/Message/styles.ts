import styled from 'styled-components'
import { COLORS } from '../../styles/global'

const LOGGED_USER = 'Victor Moraes'

export const MessageDiv = styled.div<{ author: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 50px;
  width: 240px;
  padding-left: 18px;
  margin: 10px 0px 0px 27px;

  font-size: 17px;
  line-height: 20px;

  border-radius: 15px;
  background-color: ${COLORS.GREY.EIGHT};

  ${({ author }) => {
    if (author === LOGGED_USER) {
      return `

      margin: 10px 27px 0px auto;

      background-color: ${COLORS.PURPLE.THREE}
      `
    }
  }}
`

export const MessageTime = styled.div`
  display: flex;
  justify-content: flex-end;

  font-size: 12px;
  color: ${COLORS.GREY.ONE};
  line-height: 10px;

  margin-right: 15px;
`
