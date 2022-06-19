import { SocialMediaButtonDiv, SelectedBar, Icon, SocialUnreadMessagesNumber } from './styles'

interface SocialMediaButtonProps {
  icon: string
  isSelected?: boolean
  handleClick?: () => void
  numberNotifications?: number
  className?: string
}

const SocialMediaButton = ({
  icon,
  isSelected,
  handleClick,
  numberNotifications,
  className,
}: SocialMediaButtonProps) => {
  const hasUnreadNotifications = Boolean(numberNotifications) && !isSelected

  return (
    <SocialMediaButtonDiv isSelected={isSelected} onClick={handleClick} className={className}>
      <Icon src={icon} />
      {isSelected && <SelectedBar />}
      {hasUnreadNotifications && <SocialUnreadMessagesNumber number={numberNotifications} />}
    </SocialMediaButtonDiv>
  )
}

export default SocialMediaButton
