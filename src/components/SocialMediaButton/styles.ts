import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const SocialMediaButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70px;
  border-bottom: 1px solid ${COLORS.GREY.THREE};

  background-color: ${COLORS.WHITE.ONE};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
  }
`

export const Icon = styled.img`
  width: 45px;
  height: 45px;
`
export const SelectedBar = styled.div``
