import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const StoriesBarDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 600px;
  height: 80px;
  border: solid ${COLORS.GREY.THREE} 1px;
  margin: 15px 0px;

  background-color: ${COLORS.WHITE.ONE};
  border-radius: 7px;
  box-sizing: border-box;
`
export const ContactStoriesDiv = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 540px;
`
