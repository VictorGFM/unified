import NotificationsNumber from '../NotificationsNumber'
import {
  ContactCardDiv,
  ContactInfoDiv,
  ContactName,
  ContactPhoto,
  ContactPhotoDiv,
  ContactStatus,
  PrimaryInfo,
  SecondaryInfo,
  UnreadMessagesNumber,
} from './styles'

export interface ContactInfo {
  id: string
  contactName: string
  contactPhoto: string
  status?: string
  primaryInfo?: string
  secondaryInfo?: string
  numberNotifications?: number
}

interface ContactCardProps {
  contact: ContactInfo
  onClick: () => void
  isSelected?: boolean
}

const ContactCard = ({ contact, isSelected, onClick }: ContactCardProps) => {
  const { contactName, contactPhoto, status, primaryInfo, secondaryInfo, numberNotifications } =
    contact
  const hasUnreadNotifications = Boolean(numberNotifications)
  return (
    <ContactCardDiv
      isSelected={isSelected}
      hasUnreadNotifications={hasUnreadNotifications}
      onClick={onClick}
    >
      <ContactPhotoDiv>
        <ContactPhoto src={contactPhoto} />
        <ContactStatus status={status} />
      </ContactPhotoDiv>
      <ContactInfoDiv>
        <ContactName>{contactName}</ContactName>
        <PrimaryInfo>{primaryInfo}</PrimaryInfo>
        <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
        {hasUnreadNotifications && <UnreadMessagesNumber number={numberNotifications} />}
      </ContactInfoDiv>
    </ContactCardDiv>
  )
}

export default ContactCard
