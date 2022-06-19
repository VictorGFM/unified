import { HeaderDiv, SpaceDiv, Logo, ButtonsDiv } from './styles'
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
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <HeaderDiv>
        <SpaceDiv />
        <Logo src={AppLogo} onClick={() => navigate('/')} />
        <ButtonsDiv>
          <HeaderButton icon={HomeIcon} isSelected handleClick={() => navigate('/')} />
          <HeaderButton icon={GroupsIcon} handleClick={() => navigate('/groups')} />
          <HeaderButton icon={ContactsIcon} handleClick={() => navigate('/contacts')} />
          <HeaderButton
            icon={MessagesIcon}
            notificationsNumber={31}
            handleClick={() => navigate('/messages')}
          />
          <HeaderButton icon={NotificationsIcon} notificationsNumber={31} />
          <HeaderButton icon={ProfilePhotoIcon} />
        </ButtonsDiv>
      </HeaderDiv>
    </>
  )
}

export default Header
