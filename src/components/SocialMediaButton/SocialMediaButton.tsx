import { SocialMediaButtonDiv, SelectedBar, Icon, SocialUnreadMessagesNumber } from './styles'

interface SocialMediaButtonProps {
  icon: string
  isSelected?: boolean
  onClick?: () => void
  unreadMessages?: number
  className?: string
  dataCY?: string
}

const SocialMediaButton = ({
  icon,
  isSelected,
  onClick,
  unreadMessages,
  className,
  dataCY,
}: SocialMediaButtonProps) => {
  const hasUnreadNotifications = Boolean(unreadMessages) && !isSelected

  return (
    <SocialMediaButtonDiv
      isSelected={isSelected}
      onClick={onClick}
      className={className}
      data-cy={dataCY}
    >
      <Icon src={icon} />
      {isSelected && <SelectedBar />}
      {hasUnreadNotifications && <SocialUnreadMessagesNumber number={unreadMessages} />}
    </SocialMediaButtonDiv>
  )
}

export default SocialMediaButton
