import { MessageDiv } from './styles'

export interface Message {
  text: string
  author: string
}

interface MessageProps {
  message: Message
}

const Message = ({ message }: MessageProps) => {
  const { text, author } = message
  return <MessageDiv author={author}>{text}</MessageDiv>
}

export default Message
