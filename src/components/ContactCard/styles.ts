import styled from 'styled-components'
import { COLORS } from '../../styles/global'
import NotificationsNumber from '../NotificationsNumber'

export const ContactCardDiv = styled.div<{ isSelected: boolean; hasUnreadNotifications: boolean }>`
  display: flex;
  align-items: center;

  width: 326px;
  height: 100px;
  margin-left: 7px;

  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: ${COLORS.PURPLE.TWO};
  `}
  ${({ hasUnreadNotifications }) =>
    hasUnreadNotifications &&
    `
    font-weight: bold;
  `}
`

export const ContactPhotoDiv = styled.div`
  position: relative;

  width: 70px;
  height: 70px;
  margin-left: 18px;
  border: 1px solid ${COLORS.GREY.ONE};

  border-radius: 100%;
`

export const ContactPhoto = styled.img`
  height: 100%;
`

export const ContactStatus = styled.div<{ status: string }>`
  position: absolute;
  right: 5px;
  bottom: 1px;

  width: 15px;
  height: 15px;
  border: 1px solid ${COLORS.BLACK.ONE};

  border-radius: 100%;
  background-color: ${COLORS.WHITE.ONE};
  ${({ status }) =>
    status === 'online' &&
    `
    background-color: ${COLORS.GREEN.ONE};
  `}
`

export const ContactInfoDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 0px 12px;
`

export const ContactName = styled.div`
  order: 1;

  width: 55%;

  font-size: 17px;
  line-height: 20px;
`

export const PrimaryInfo = styled.span`
  order: 3;

  width: 80%;
  margin-top: 3px;

  font-size: 17px;
  line-height: 20px;

  color: ${COLORS.GREY.ONE};
`

export const SecondaryInfo = styled.span`
  order: 2;

  width: 45%;
  margin-left: auto;

  font-size: 15px;
  line-height: 21px;
  text-align: right;

  color: ${COLORS.GREY.ONE};
`

export const UnreadMessagesNumber = styled(NotificationsNumber)`
  order: 4;

  margin-left: auto;

  position: static;
`
