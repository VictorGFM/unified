import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const ContactStoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;

  font-size: 12px;
`

export const ContactStoryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border: 2px solid ${COLORS.PURPLE.ONE};

  border-radius: 100%;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;
`

export const ContactPhoto = styled.img`
  height: 105%;
`

export const ContactName = styled.span`
  margin-top: 5px;
  line-height: 0.87;
`
