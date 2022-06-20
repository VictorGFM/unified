import Chat from '../../components/Chat'
import ContactMessages from '../../components/ContactMessages'
import { MessagesDiv, MessagesPageDiv } from './styles'
import { contacts } from './data'
import { useState } from 'react'
import { ContactInfo } from '../../components/ContactCard/ContactCard'

const MessagesPage = () => {
  const [selectedContact, setSelectedContact] = useState(contacts && contacts[0])

  const handleSelectContact = (contact: ContactInfo) => {
    setSelectedContact(contact)
  }

  return (
    <MessagesPageDiv>
      <MessagesDiv>
        <ContactMessages
          selectedContactID={selectedContact?.id}
          handleSelectContact={handleSelectContact}
        />
        {selectedContact && <Chat contact={selectedContact} />}
      </MessagesDiv>
    </MessagesPageDiv>
  )
}

export default MessagesPage
