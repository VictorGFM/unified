import { useEffect, useRef, useState } from 'react'
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

interface Notifications {
  handleCloseNotifications: () => void
}

const Notifications = ({ handleCloseNotifications }: Notifications) => {
  const [selectedSocial, setSelectedSocial] = useState('Unified')
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseNotifications()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  const handleClickButton = (socialType: SocialType) => {
    setSelectedSocial(socialType)
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
          notifications.map(notification => (
            <NotificationCard key={notification.id} notification={notification} />
          ))}
      </NotificationsList>
    </NotificationsDiv>
  )
}

export default Notifications
