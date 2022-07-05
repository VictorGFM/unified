import styled from 'styled-components'
import { COLORS } from '../../styles/global'
import ContactCard from '../ContactCard'
import {
  ContactInfoDiv,
  ContactPhotoDiv,
  ContactStatus,
  PrimaryInfo,
  SecondaryInfo,
  UnreadMessagesNumber,
} from '../ContactCard/styles'
import { ContactName } from '../ContactCard/styles'
import InputBar from '../InputBar'
import { InputBarInput, InputButton, InputButtonIcon } from '../InputBar/styles'
import SocialMediaButton from '../SocialMediaButton'
import { Icon, SelectedBar } from '../SocialMediaButton/styles'

export const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const SocialBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 71px;
  border-bottom: solid ${COLORS.GREY.ONE} 1px;
  box-sizing: border-box;
`

export const ChatContactCard = styled(ContactCard)`
  width: 170px;
  height: 46px;
  margin-left: 20px;

  font-weight: normal;

  cursor: auto;

  &:hover {
    background-color: ${COLORS.WHITE.ONE};
  }

  ${ContactPhotoDiv} {
    width: 46px;
    height: 46px;
    margin-left: 0px;
    ${ContactStatus} {
      right: -2px;
      bottom: -2px;
    }
  }

  ${ContactInfoDiv} {
    margin: 0px 0px 0px 15px;
    ${ContactName} {
      width: 109px;
      height: 17px;
    }
    ${PrimaryInfo} {
      display: none;
    }
    ${SecondaryInfo} {
      display: none;
    }
    ${UnreadMessagesNumber} {
      display: none;
    }
  }
`

export const SocialMediaButtonsDiv = styled.div`
  display: flex;
`

export const ChatSocialMediaButton = styled(SocialMediaButton)`
  width: 70px;
  height: 70px;
  border: none;
  ${Icon} {
    margin-bottom: 10px;
  }
  ${SelectedBar} {
    left: 0;
    bottom: 0px;
    width: 70px;
    height: 10px;
  }
`

export const InfoButton = styled.div`
  margin-right: 15px;

  cursor: pointer;
`

export const InfoButtonImage = styled.img``

export const MessagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 510px;
  border-bottom-right-radius: 7px;

  background-color: ${COLORS.WHITE.ONE};
`

export const MessagesWrapper = styled.div`
  overflow: auto;
  overflow-x: hidden;
`

export const MessageDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 138px;
  margin: 10px auto 0px auto;

  font-size: 15px;
  line-height: 18px;
  color: ${COLORS.GREY.SEVEN};
`

export const SendMessageBar = styled(InputBar)`
  width: 689px;
  height: 50px;
  margin: 22px auto 14px auto;
  box-sizing: border-box;

  ${InputBarInput} {
    height: 47px;
    padding-left: 18px;

    border-radius: 10px;
  }
  ${InputButton} {
    height: 47px;
    margin-right: 17px;
    ${InputButtonIcon} {
      width: 25px;
      height: 25px;
    }
  }
`
