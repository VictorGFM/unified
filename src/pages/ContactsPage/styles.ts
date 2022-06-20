import styled from 'styled-components'
import {
  ContactCardDiv,
  ContactInfoDiv,
  ContactPhotoDiv,
  ContactStatus,
  ContactName,
  PrimaryInfo,
  SecondaryInfo,
  UnreadMessagesNumber,
} from '../../components/ContactCard/styles'
import InputBar from '../../components/InputBar'
import { InputBarInput, InputButton, InputButtonIcon } from '../../components/InputBar/styles'
import { COLORS } from '../../styles/global'

export const ContactsPageDiv = styled.div`
  display: flex;
  justify-content: center;
`

export const ContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1031px;
  height: 596px;
  margin: 27px 0px 27px 0px;

  background-color: ${COLORS.WHITE.ONE};
  border: solid ${COLORS.GREY.THREE} 1px;
  border-radius: 7px;
  box-sizing: border-box;
`

export const ContactsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 33px;
`

export const ContactsSearchBar = styled(InputBar)`
  width: 771px;
  height: 53px;
  margin: 0px 21px 0px 0px;

  ${InputBarInput} {
    padding-left: 15px;

    font-size: 22px;
    line-height: 26px;
  }
  ${InputButton} {
    height: 53px;
    margin-right: 15px;
    ${InputButtonIcon} {
      width: 32px;
      height: 27px;
    }
  }
`

export const ContactsList = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 942px;
  margin-top: 15px;
  margin-bottom: 5px;

  overflow: auto;
  ${ContactCardDiv} {
    width: 230px;
    height: 90px;
    margin: 0px;

    font-weight: normal;

    ${ContactPhotoDiv} {
      width: 60px;
      height: 60px;
      margin-left: 26px;
      ${ContactStatus} {
        display: none;
      }
    }

    ${ContactInfoDiv} {
      margin: 0px 0px 0px 15px;
      ${ContactName} {
        flex: 1;
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
  }
`
