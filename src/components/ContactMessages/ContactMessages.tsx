import ContactCard from '../ContactCard'
import { ContactCardDiv, ContactMessagesDiv, MessagesSearchBar, MessagesTitle } from './styles'
import { AlfredoPhotoIcon } from '../../assets'
import { ContactInfo } from '../ContactCard/ContactCard'
import { contacts } from './data'
import { useState } from 'react'

const ContactMessages = () => {
  const [selectedContact, setSelectedContact] = useState((contacts && contacts[0].id) || '')

  const handleSelectContact = (contactID: string) => {
    setSelectedContact(contactID)
  }

  return (
    <ContactMessagesDiv>
      <MessagesTitle>Messages</MessagesTitle>
      <MessagesSearchBar placeholder="Find message..." />
      <ContactCardDiv>
        {contacts &&
          contacts.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onClick={() => handleSelectContact(contact.id)}
              isSelected={selectedContact === contact.id}
            />
          ))}
      </ContactCardDiv>
    </ContactMessagesDiv>
  )
}

export default ContactMessages
