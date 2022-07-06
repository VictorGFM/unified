import { SocialType } from '../SocialMediaBar/SocialMediaBar'
import {
  ContactName,
  ContactPhoto,
  NotificationCardDiv,
  NotificationDescription,
  NotificationSocialTag,
  NotificationTime,
} from './styles'

export interface Notification {
  id: string
  contactName: string
  contactPhoto: string
  description: string
  time: string
  socialType: SocialType
}

interface NotificationProps {
  notification: Notification
  onClick: () => void
  dataCY?: string
}

const NotificationCard = ({ notification, onClick, dataCY }: NotificationProps) => {
  const { contactName, contactPhoto, description, time, socialType } = notification
  return (
    <NotificationCardDiv onClick={onClick} data-cy={dataCY}>
      <ContactPhoto src={contactPhoto} />
      <ContactName>{contactName}</ContactName>
      <NotificationDescription>{description}</NotificationDescription>
      <NotificationTime>{time}</NotificationTime>
      <NotificationSocialTag socialType={socialType} />
    </NotificationCardDiv>
  )
}

export default NotificationCard
