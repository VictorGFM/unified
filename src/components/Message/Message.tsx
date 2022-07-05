import { MessageDiv, MessageTime } from './styles'
import dayjs from 'dayjs'

export interface MessageInterface {
  text: string
  author: string
  datetime: dayjs.Dayjs
}

export interface SocialMessage {
  date: dayjs.Dayjs
  messages: MessageInterface[]
}

export interface Messages {
  instagram: SocialMessage[]
  twitter: SocialMessage[]
  facebook: SocialMessage[]
}

interface MessageProps {
  message: MessageInterface
}

const Message = ({ message }: MessageProps) => {
  const { text, author, datetime } = message
  return (
    <MessageDiv author={author}>
      {text}
      <MessageTime>{datetime.format('HH:MM')}</MessageTime>
    </MessageDiv>
  )
}

export default Message
