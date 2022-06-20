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
  socialType: string
}

interface NotificationProps {
  notification: Notification
}

const NotificationCard = ({ notification }: NotificationProps) => {
  const { contactName, contactPhoto, description, time, socialType } = notification
  return (
    <NotificationCardDiv>
      <ContactPhoto src={contactPhoto} />
      <ContactName>{contactName}</ContactName>
      <NotificationDescription>{description}</NotificationDescription>
      <NotificationTime>{time}</NotificationTime>
      <NotificationSocialTag socialType={socialType} />
    </NotificationCardDiv>
  )
}

export default NotificationCard
