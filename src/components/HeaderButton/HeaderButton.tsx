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
    <HeaderButtonDiv onClick={handleClick}>
      <Button isUserProfile={isUserProfile} isSelected={isSelected}>
        <ButtonIcon src={icon} isUserProfile={isUserProfile} isSelected={isSelected} />
      </Button>
      {showNotificationsNumber && <NotificationsNumber number={notificationsNumber} />}
    </HeaderButtonDiv>
  )
}

export default HeaderButton
