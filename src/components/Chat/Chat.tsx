import { useState } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon, InfoIcon } from '../../assets'
import { ContactInfo } from '../ContactCard/ContactCard'
import { SocialType } from '../SocialMediaBar/SocialMediaBar'
import SocialMediaButton from '../SocialMediaButton'
import {
  ChatContactCard,
  ChatDiv,
  ChatSocialMediaButton,
  InfoButton,
  InfoButtonImage,
  MessagesDiv,
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
            handleClick={() => handleClickButton('Instagram')}
            unreadMessages={unreadMessages?.instagram}
          />
          <ChatSocialMediaButton
            icon={TwitterIcon}
            isSelected={selectedSocial === 'Twitter'}
            handleClick={() => handleClickButton('Twitter')}
            unreadMessages={unreadMessages?.twitter}
          />
          <ChatSocialMediaButton
            icon={FacebookIcon}
            isSelected={selectedSocial === 'Facebook'}
            handleClick={() => handleClickButton('Facebook')}
            unreadMessages={unreadMessages?.facebook}
          />
        </SocialMediaButtonsDiv>
        <InfoButton>
          <InfoButtonImage src={InfoIcon} />
        </InfoButton>
      </SocialBar>
      <MessagesDiv></MessagesDiv>
    </ChatDiv>
  )
}

export default Chat
