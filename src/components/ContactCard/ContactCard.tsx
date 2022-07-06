import { Messages } from '../Message/Message'
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
  messages?: Messages
}

interface ContactCardProps {
  contact: ContactInfo
  onClick?: () => void
  isSelected?: boolean
  className?: string
  dataCY?: string
}

const ContactCard = ({ contact, isSelected, onClick, className, dataCY }: ContactCardProps) => {
  const { contactName, contactPhoto, status, primaryInfo, secondaryInfo, contactNotifications } =
    contact
  const hasUnreadNotifications = Boolean(contactNotifications)
  return (
    <ContactCardDiv
      isSelected={isSelected}
      hasUnreadNotifications={hasUnreadNotifications}
      onClick={onClick}
      className={className}
      data-cy={dataCY}
    >
      <ContactPhotoDiv>
        <ContactPhoto src={contactPhoto} />
        <ContactStatus status={status} />
      </ContactPhotoDiv>
      <ContactInfoDiv>
        <ContactName>{contactName}</ContactName>
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
