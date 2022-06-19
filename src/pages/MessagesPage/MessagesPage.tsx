import Chat from '../../components/Chat'
import ContactMessages from '../../components/ContactMessages'
import { MessagesDiv, MessagesPageDiv } from './styles'
import { contacts } from './data'

const MessagesPage = () => {
  return (
    <MessagesPageDiv>
      <MessagesDiv>
        <ContactMessages />
        <Chat contact={contacts[1]} />
      </MessagesDiv>
    </MessagesPageDiv>
  )
}

export default MessagesPage
