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
import { useEffect, useRef, useState } from 'react'
import Notifications from '../Notifications'

type ButtonType = 'Home' | 'Groups' | 'Contacts' | 'Messages' | 'Notifications'

const Header = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const buttonRef = useRef(null)
  const modalRef = useRef(null)

  const currentPage = location.pathname

  const buttonRoutes = {
    Home: '/app',
    Groups: '/app/groups',
    Contacts: '/app/contacts',
    Messages: '/app/messages',
  }

  const handleClickButton = (buttonType: ButtonType) => {
    if (buttonType === 'Notifications') {
      setIsNotificationsOpen(!isNotificationsOpen)
    } else {
      navigate(buttonRoutes[buttonType])
    }
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false)
      }
    }
    if (isNotificationsOpen) {
      document.addEventListener('click', handleClickOutside, false)
    } else {
      document.removeEventListener('click', handleClickOutside, false)
    }
  }, [isNotificationsOpen])

  return (
    <>
      <HeaderDiv>
        <Logo src={AppLogo} onClick={() => navigate('/app')} />
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
            ref={buttonRef}
          />
          <HeaderButton icon={ProfilePhotoIcon} />
        </ButtonsDiv>
        {isNotificationsOpen && <Notifications ref={modalRef} />}
      </HeaderDiv>
    </>
  )
}

export default Header
