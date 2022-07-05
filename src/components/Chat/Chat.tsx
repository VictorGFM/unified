import { Fragment, useEffect, useState } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, InfoIcon, SendIcon } from '../../assets'
import { ContactInfo } from '../ContactCard/ContactCard'
import Message from '../Message'
import { SocialMessage } from '../Message/Message'
import { SocialType } from '../SocialMediaBar/SocialMediaBar'

import {
  ChatContactCard,
  ChatDiv,
  ChatSocialMediaButton,
  InfoButton,
  InfoButtonImage,
  MessageDate,
  MessagesDiv,
  SendMessageBar,
  SocialBar,
  SocialMediaButtonsDiv,
} from './styles'

interface ChatProps {
  contact: ContactInfo
}

const Chat = ({ contact }: ChatProps) => {
  const [selectedSocial, setSelectedSocial] = useState('Instagram')
  const [messages, setMessages] = useState<SocialMessage[]>(
    contact.messages?.[selectedSocial.toLowerCase()]
  )

  const unreadMessages = contact.contactNotifications?.messages

  const handleClickButton = (socialType: SocialType) => {
    setSelectedSocial(socialType)
  }

  useEffect(() => {
    setMessages(contact.messages?.[selectedSocial.toLowerCase()])
  }, [contact, selectedSocial])

  return (
    <ChatDiv>
      <SocialBar>
        <ChatContactCard contact={contact} />
        <SocialMediaButtonsDiv>
          <ChatSocialMediaButton
            icon={InstagramIcon}
            isSelected={selectedSocial === 'Instagram'}
            onClick={() => handleClickButton('Instagram')}
            unreadMessages={unreadMessages?.instagram}
          />
          <ChatSocialMediaButton
            icon={TwitterIcon}
            isSelected={selectedSocial === 'Twitter'}
            onClick={() => handleClickButton('Twitter')}
            unreadMessages={unreadMessages?.twitter}
          />
          <ChatSocialMediaButton
            icon={FacebookIcon}
            isSelected={selectedSocial === 'Facebook'}
            onClick={() => handleClickButton('Facebook')}
            unreadMessages={unreadMessages?.facebook}
          />
        </SocialMediaButtonsDiv>
        <InfoButton>
          <InfoButtonImage src={InfoIcon} />
        </InfoButton>
      </SocialBar>
      <MessagesDiv>
        {messages?.map((socialMessage, index) => {
          return (
            <Fragment key={index}>
              <MessageDate>{socialMessage?.date.format('DD/MM/YYYY')}</MessageDate>
              {socialMessage.messages?.map((message, index) => {
                return <Message key={index} message={message} />
              })}
            </Fragment>
          )
        })}
        <SendMessageBar icon={SendIcon} placeholder="Send a message..." />
      </MessagesDiv>
    </ChatDiv>
  )
}

export default Chat
