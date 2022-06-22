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

interface Notifications {
  total: number
  instagram?: number
  twitter?: number
  facebook?: number
}

export interface ContactNotifications {
  total: number
  messages?: Notifications
  stories?: Notifications
}

export interface ContactInfo {
  id: string
  contactName: string
  contactPhoto: string
  status?: string
  primaryInfo?: string
  secondaryInfo?: string
  contactNotifications?: ContactNotifications
}

interface ContactCardProps {
  contact: ContactInfo
  onClick?: () => void
  isSelected?: boolean
  className?: string
}

const ContactCard = ({ contact, isSelected, onClick, className }: ContactCardProps) => {
  const { contactName, contactPhoto, status, primaryInfo, secondaryInfo, contactNotifications } =
    contact
  const hasUnreadNotifications = Boolean(contactNotifications)
  return (
    <ContactCardDiv
      isSelected={isSelected}
      hasUnreadNotifications={hasUnreadNotifications}
      onClick={onClick}
      className={className}
    >
      <ContactPhotoDiv>
        <ContactPhoto src={contactPhoto} />
        <ContactStatus status={status} />
      </ContactPhotoDiv>
      <ContactInfoDiv>
        <ContactName></ContactName>
        <PrimaryInfo>{primaryInfo}</PrimaryInfo>
        <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
        {hasUnreadNotifications && (
          <UnreadMessagesNumber number={contactNotifications.messages.total} />
        )}
      </ContactInfoDiv>
    </ContactCardDiv>
  )
}

export default ContactCard
