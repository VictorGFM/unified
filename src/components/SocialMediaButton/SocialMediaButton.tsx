import { SocialMediaButtonDiv, SelectedBar, Icon, SocialUnreadMessagesNumber } from './styles'

interface SocialMediaButtonProps {
  icon: string
  isSelected?: boolean
  handleClick?: () => void
  unreadMessages?: number
  className?: string
}

const SocialMediaButton = ({
  icon,
  isSelected,
  handleClick,
  unreadMessages,
  className,
}: SocialMediaButtonProps) => {
  const hasUnreadNotifications = Boolean(unreadMessages) && !isSelected

  return (
    <SocialMediaButtonDiv isSelected={isSelected} onClick={handleClick} className={className}>
      <Icon src={icon} />
      {isSelected && <SelectedBar />}
      {hasUnreadNotifications && <SocialUnreadMessagesNumber number={unreadMessages} />}
    </SocialMediaButtonDiv>
  )
}

export default SocialMediaButton
