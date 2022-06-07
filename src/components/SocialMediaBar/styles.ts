import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const SocialMediaBarDiv = styled.div`
  display: flex;
  grid-row: 1/3;
`
export const SocialMediaButtonsDiv = styled.div`
  flex: 1;
`
export const ToggleSocialMediaBardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 17px;

  background-color: ${COLORS.WHITE.ONE};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.48);
  z-index: 1;
`
export const ToggleSocialMediaBarButton = styled.img``
