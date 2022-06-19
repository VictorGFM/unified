import { NotificationsNumberDiv } from './styles'

interface NotificationsNumberProps {
  number: number
  className?: string
}

const NotificationsNumber = ({ number, className }: NotificationsNumberProps) => {
  const numberText = number > 30 ? '+30' : number
  return <NotificationsNumberDiv className={className}>{numberText}</NotificationsNumberDiv>
}

export default NotificationsNumber
