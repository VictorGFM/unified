import { useState } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, InfoIcon, SendIcon } from '../../assets'
import { ContactInfo } from '../ContactCard/ContactCard'
import Message from '../Message'
import { SocialType } from '../SocialMediaBar/SocialMediaBar'
import SocialMediaButton from '../SocialMediaButton'
import { messages } from './data'
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

  const unreadMessages = contact.contactNotifications?.messages

  const handleClickButton = (socialType: SocialType) => {
    setSelectedSocial(socialType)
  }

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
        <MessageDate>05/09/2021</MessageDate>
        <Message message={messages[0]} />
        <MessageDate>07/09/2021</MessageDate>
        <Message message={messages[1]} />
        <SendMessageBar icon={SendIcon} placeholder="Send a message..." />
      </MessagesDiv>
    </ChatDiv>
  )
}

export default Chat
