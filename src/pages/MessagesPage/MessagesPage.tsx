import Chat from '../../components/Chat'
import ContactMessages from '../../components/ContactMessages'
import { MessagesDiv, MessagesPageDiv } from './styles'

const MessagesPage = () => {
  return (
    <MessagesPageDiv>
      <MessagesDiv>
        <ContactMessages />
        <Chat />
      </MessagesDiv>
    </MessagesPageDiv>
  )
}

export default MessagesPage
