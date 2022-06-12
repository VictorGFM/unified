import { NotificationsNumberDiv } from './styles'

const NotificationsNumber = ({ number }) => {
  const numberText = number > 30 ? '+30' : number
  return <NotificationsNumberDiv>{numberText}</NotificationsNumberDiv>
}

export default NotificationsNumber
