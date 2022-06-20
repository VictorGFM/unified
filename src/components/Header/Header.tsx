import { HeaderDiv, Logo, ButtonsDiv } from './styles'
import {
  AppLogo,
  HomeIcon,
  GroupsIcon,
  ContactsIcon,
  MessagesIcon,
  NotificationsIcon,
  ProfilePhotoIcon,
} from '../../assets'
import HeaderButton from '../HeaderButton/HeaderButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Notifications from '../Notifications'

type ButtonType = 'Home' | 'Groups' | 'Contacts' | 'Messages' | 'Notifications'

const Header = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const currentPage = location.pathname

  const buttonRoutes = {
    Home: '/',
    Groups: '/groups',
    Contacts: '/contacts',
    Messages: '/messages',
  }

  const handleClickButton = (buttonType: ButtonType) => {
    if (buttonType === 'Notifications') {
      setIsNotificationsOpen(!isNotificationsOpen)
    } else {
      navigate(buttonRoutes[buttonType])
    }
  }

  const handleCloseNotifications = () => {
    setIsNotificationsOpen(false)
  }

  return (
    <>
      <HeaderDiv>
        <Logo src={AppLogo} onClick={() => navigate('/')} />
        <ButtonsDiv>
          <HeaderButton
            icon={HomeIcon}
            isSelected={currentPage === buttonRoutes['Home']}
            handleClick={() => handleClickButton('Home')}
          />
          <HeaderButton
            icon={GroupsIcon}
            isSelected={currentPage === buttonRoutes['Groups']}
            handleClick={() => handleClickButton('Groups')}
          />
          <HeaderButton
            icon={ContactsIcon}
            isSelected={currentPage === buttonRoutes['Contacts']}
            handleClick={() => handleClickButton('Contacts')}
          />
          <HeaderButton
            icon={MessagesIcon}
            notificationsNumber={31}
            isSelected={currentPage === buttonRoutes['Messages']}
            handleClick={() => handleClickButton('Messages')}
          />
          <HeaderButton
            icon={NotificationsIcon}
            notificationsNumber={31}
            isSelected={isNotificationsOpen}
            handleClick={() => handleClickButton('Notifications')}
          />
          <HeaderButton icon={ProfilePhotoIcon} />
        </ButtonsDiv>
        {isNotificationsOpen && (
          <Notifications handleCloseNotifications={handleCloseNotifications} />
        )}
      </HeaderDiv>
    </>
  )
}

export default Header
