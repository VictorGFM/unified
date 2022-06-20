import styled from 'styled-components'
import { COLORS } from '../../styles/global'
import SocialTag from '../SocialTag'

export const NotificationCardDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 477px;
  height: 70px;
  border-top: 1px solid ${COLORS.GREY.THREE};

  cursor: pointer;
  &:hover {
    background-color: ${COLORS.PURPLE.TWO};
  }
`

export const ContactPhoto = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid ${COLORS.GREY.ONE};
  margin-left: 18px;

  border-radius: 100%;
`

export const ContactName = styled.span`
  margin-left: 17px;

  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
`

export const NotificationDescription = styled.span`
  margin-left: 4px;

  font-size: 17px;
  line-height: 20px;
`

export const NotificationTime = styled.span`
  margin-left: 4px;

  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.GREY.ONE};
`

export const NotificationSocialTag = styled(SocialTag)`
  right: 33px;
`
