import styled from 'styled-components'
import { COLORS } from '../../styles/global'
import SocialMediaButton from '../SocialMediaButton'
import { Icon, SelectedBar, SocialUnreadMessagesNumber } from '../SocialMediaButton/styles'

export const NotificationsDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 72px;

  width: 479px;
  height: 332px;
  border: 1px solid ${COLORS.GREY.THREE};
  background-color: ${COLORS.WHITE.ONE};

  border-radius: 7px;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
  z-index: 2;
`

export const NotificationsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 42px;
  border-bottom: 1px solid ${COLORS.GREY.THREE};
`

export const NotificationsTitle = styled.span`
  width: 116px;
  margin-left: 16px;

  font-size: 20px;
  font-weight: bold;
  line-height: 23px;
`

export const SocialButtonsDiv = styled.div`
  display: flex;
  margin-left: 23px;
`

export const NotificationsSocialButton = styled(SocialMediaButton)`
  width: 42px;
  height: 42px;
  border: none;
  ${Icon} {
    width: 27px;
    height: 27px;
    margin-bottom: 4px;
  }
  ${SelectedBar} {
    left: 0;
    bottom: 0px;
    width: 43px;
    height: 5.6px;
  }
  ${SocialUnreadMessagesNumber} {
    right: 2px;
    bottom: 3px;

    width: 20px;
    height: 15px;

    font-size: 10px;
    line-height: 12px;
  }
`

export const NotificationsList = styled.div`
  overflow: auto;
  overflow-x: hidden;

  :last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`
