import { forwardRef, useState } from 'react'
import { AppIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../../assets'
import NotificationCard from '../NotificationCard'
import { SocialType } from '../SocialMediaBar/SocialMediaBar'
import {
  NotificationsDiv,
  NotificationsHeader,
  NotificationsList,
  NotificationsSocialButton,
  NotificationsTitle,
  SocialButtonsDiv,
} from './styles'
import { notifications } from './data'
import { useNavigate } from 'react-router-dom'

const Notifications = ({}, ref) => {
  const [selectedSocial, setSelectedSocial] = useState('Unified')
  const navigate = useNavigate()

  const handleClickButton = (socialType: SocialType) => {
    setSelectedSocial(socialType)
  }

  const handleClickNotification = (socialType: SocialType) => {
    navigate(`/social/${socialType.toLowerCase()}`)
  }

  return (
    <NotificationsDiv ref={ref}>
      <NotificationsHeader>
        <NotificationsTitle>Notifications</NotificationsTitle>
        <SocialButtonsDiv>
          <NotificationsSocialButton
            icon={AppIcon}
            isSelected={selectedSocial === 'Unified'}
            onClick={() => handleClickButton('Unified')}
            unreadMessages={64}
          />
          <NotificationsSocialButton
            icon={InstagramIcon}
            isSelected={selectedSocial === 'Instagram'}
            onClick={() => handleClickButton('Instagram')}
            unreadMessages={2}
          />
          <NotificationsSocialButton
            icon={TwitterIcon}
            isSelected={selectedSocial === 'Twitter'}
            onClick={() => handleClickButton('Twitter')}
            unreadMessages={31}
          />
          <NotificationsSocialButton
            icon={FacebookIcon}
            isSelected={selectedSocial === 'Facebook'}
            onClick={() => handleClickButton('Facebook')}
            unreadMessages={31}
          />
        </SocialButtonsDiv>
      </NotificationsHeader>
      <NotificationsList>
        {notifications &&
          notifications.map((notification, index) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onClick={() => handleClickNotification(notification.socialType)}
              dataCY={`notificaiton-card-${index}`}
            />
          ))}
      </NotificationsList>
    </NotificationsDiv>
  )
}

export default forwardRef(Notifications)
