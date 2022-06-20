import styled from 'styled-components'
import { COLORS } from '../../styles/global'

const LOGGED_USER = 'Victor Moraes'

export const MessageDiv = styled.div<{ author: string }>`
  display: flex;
  align-items: center;

  height: 44px;
  width: 240px;
  padding-left: 18px;
  margin: 10px 0px 0px 27px;

  font-size: 17px;
  line-height: 20px;

  border-radius: 15px;
  background-color: ${COLORS.WHITE.ONE};

  ${({ author }) => {
    if (author === LOGGED_USER) {
      return `

      margin: 10px 27px 0px auto;

      background-color: ${COLORS.PURPLE.THREE}
      `
    }
  }}
`
