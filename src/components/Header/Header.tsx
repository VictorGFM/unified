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

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <SpaceDiv />
        <Logo src={AppLogo} />
        <ButtonsDiv>
          <HeaderButton icon={HomeIcon} isSelected />
          <HeaderButton icon={GroupsIcon} />
          <HeaderButton icon={ContactsIcon} />
          <HeaderButton icon={MessagesIcon} notificationsNumber={31} />
          <HeaderButton icon={NotificationsIcon} notificationsNumber={31} />
          <HeaderButton icon={ProfilePhotoIcon} />
        </ButtonsDiv>
      </HeaderDiv>
    </>
  )
}

export default Header
