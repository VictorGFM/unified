import { NotificationsNumberDiv } from './styles'

interface NotificationsNumberProps {
  number: number
  className?: string
  onClick?: () => void
}

const NotificationsNumber = ({ number, className, onClick }: NotificationsNumberProps) => {
  const numberText = number > 30 ? '+30' : number
  return (
    <NotificationsNumberDiv className={className} onClick={onClick}>
      {numberText}
    </NotificationsNumberDiv>
  )
}

export default NotificationsNumber
