import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const GroupCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 230px;
  height: 240px;

  border-radius: 7px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
  }
`

export const GroupImage = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid ${COLORS.GREY.ONE};
  margin-top: 22px;

  border-radius: 100%;
`

export const GroupTitle = styled.div`
  width: 187px;
  margin: 20px 0px;

  font-size: 25px;
  font-weight: bold;
  line-height: 29px;
  text-align: center;
`
