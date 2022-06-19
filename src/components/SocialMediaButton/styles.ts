import styled from 'styled-components'
import { COLORS } from '../../styles/global'
import NotificationsNumber from '../NotificationsNumber'

export const SocialMediaButtonDiv = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 70px;
  border-bottom: 1px solid ${COLORS.GREY.THREE};

  background-color: ${({ isSelected }) => (isSelected ? COLORS.PURPLE.TWO : COLORS.WHITE.ONE)};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
  }
`

export const Icon = styled.img`
  width: 45px;
  height: 45px;
`

export const SelectedBar = styled.div`
  position: absolute;
  right: 0;

  width: 10px;
  height: 70px;

  background-color: ${COLORS.PURPLE.ONE};
`

export const SocialUnreadMessagesNumber = styled(NotificationsNumber)`
  right: 3px;
  bottom: 12px;
`
