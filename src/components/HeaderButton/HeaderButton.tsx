import { HeaderButtonDiv, Button, ButtonIcon } from './styles'
import NotificationsNumber from '../NotificationsNumber'
import { ProfilePhotoIcon } from '../../assets'
import { forwardRef } from 'react'

interface HeaderButtonProps {
  icon: string
  notificationsNumber?: number
  isSelected?: boolean
  handleClick?: () => void
  dataCY?: string
}

const HeaderButton = (
  { icon, notificationsNumber, isSelected, handleClick, dataCY }: HeaderButtonProps,
  ref
) => {
  const isUserProfile = icon === ProfilePhotoIcon
  const showNotificationsNumber = !isUserProfile && notificationsNumber > 0
  return (
    <HeaderButtonDiv ref={ref} data-cy={dataCY}>
      <Button isUserProfile={isUserProfile} isSelected={isSelected} onClick={handleClick}>
        <ButtonIcon src={icon} isUserProfile={isUserProfile} isSelected={isSelected} />
      </Button>
      {showNotificationsNumber && (
        <NotificationsNumber number={notificationsNumber} onClick={handleClick} />
      )}
    </HeaderButtonDiv>
  )
}

export default forwardRef(HeaderButton)
