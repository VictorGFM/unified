import { HeaderButtonDiv, Button, ButtonIcon } from './styles'
import NotificationsNumber from '../NotificationsNumber'
import { ProfilePhotoIcon } from '../../assets'

interface HeaderButtonProps {
  icon: string
  notificationsNumber?: number
  isSelected?: boolean
  handleClick?: () => void
}

const HeaderButton = ({
  icon,
  notificationsNumber,
  isSelected,
  handleClick,
}: HeaderButtonProps) => {
  const isUserProfile = icon === ProfilePhotoIcon
  const showNotificationsNumber = !isUserProfile && notificationsNumber > 0
  return (
    <HeaderButtonDiv>
      <Button isUserProfile={isUserProfile} isSelected={isSelected} onClick={handleClick}>
        <ButtonIcon src={icon} isUserProfile={isUserProfile} isSelected={isSelected} />
      </Button>
      {showNotificationsNumber && (
        <NotificationsNumber number={notificationsNumber} onClick={handleClick} />
      )}
    </HeaderButtonDiv>
  )
}

export default HeaderButton
