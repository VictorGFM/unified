import { Fragment, useEffect, useRef, useState } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, InfoIcon, SendIcon } from '../../assets'
import { ContactInfo } from '../ContactCard/ContactCard'
import Message from '../Message'
import { SocialMessage } from '../Message/Message'
import { SocialType } from '../SocialMediaBar/SocialMediaBar'
import dayjs from 'dayjs'

import {
  ChatContactCard,
  ChatDiv,
  ChatSocialMediaButton,
  InfoButton,
  InfoButtonImage,
  MessageDate,
  MessagesDiv,
  MessagesWrapper,
  SendMessageBar,
  SocialBar,
  SocialMediaButtonsDiv,
} from './styles'
import { LOGGED_USER } from '../Message/styles'

interface ChatProps {
  contact: ContactInfo
}

const Chat = ({ contact }: ChatProps) => {
  const [selectedSocial, setSelectedSocial] = useState('Instagram')
  const [messages, setMessages] = useState<SocialMessage[]>(
    contact.messages?.[selectedSocial.toLowerCase()]
  )
  const [inputMessage, setInputMessage] = useState('')
  const messagesRef = useRef(null)

  const handleInputMessage = event => {
    setInputMessage(event.target.value)
  }

  const handleClickButton = (socialType: SocialType) => {
    setSelectedSocial(socialType)
  }

  const handleSendMessage = () => {
    if (inputMessage) {
      let haveMessagesSentToday

      const newMessages = messages?.map(message => {
        if (message.date.isSame(dayjs(), 'day')) {
          message.messages.push({
            text: inputMessage,
            author: LOGGED_USER,
            datetime: dayjs(),
          })
          haveMessagesSentToday = true
        }
        return message
      })

      if (haveMessagesSentToday) {
        setMessages(newMessages)
      } else {
        const newMessage = {
          date: dayjs(),
          messages: [
            {
              text: inputMessage,
              author: LOGGED_USER,
              datetime: dayjs(),
            },
          ],
        }
        setMessages([...messages, newMessage])
      }

      setInputMessage('')
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSendMessage()
      setInputMessage('')
    }
  }

  useEffect(() => {
    setMessages(contact.messages?.[selectedSocial.toLowerCase()])
  }, [contact, selectedSocial])

  useEffect(() => {
    if (messagesRef) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  const unreadMessages = contact.contactNotifications?.messages

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
            dataCY={`chat-social-media-button-instagram`}
          />
          <ChatSocialMediaButton
            icon={TwitterIcon}
            isSelected={selectedSocial === 'Twitter'}
            onClick={() => handleClickButton('Twitter')}
            unreadMessages={unreadMessages?.twitter}
            dataCY={`chat-social-media-button-twitter`}
          />
          <ChatSocialMediaButton
            icon={FacebookIcon}
            isSelected={selectedSocial === 'Facebook'}
            onClick={() => handleClickButton('Facebook')}
            unreadMessages={unreadMessages?.facebook}
            dataCY={`chat-social-media-button-facebook`}
          />
        </SocialMediaButtonsDiv>
        <InfoButton>
          <InfoButtonImage src={InfoIcon} />
        </InfoButton>
      </SocialBar>
      <MessagesDiv>
        <MessagesWrapper ref={messagesRef}>
          {messages?.map((socialMessage, index) => {
            return (
              <Fragment key={index}>
                <MessageDate>{socialMessage?.date.format('DD/MM/YYYY')}</MessageDate>
                {socialMessage?.messages?.map((message, index) => {
                  return <Message key={index} message={message} />
                })}
              </Fragment>
            )
          })}
        </MessagesWrapper>
        <SendMessageBar
          icon={SendIcon}
          value={inputMessage}
          onChange={handleInputMessage}
          placeholder="Send a message..."
          onClick={handleSendMessage}
          onKeyDown={handleKeyDown}
          dataCY={`send-message-bar`}
        />
      </MessagesDiv>
    </ChatDiv>
  )
}

export default Chat
