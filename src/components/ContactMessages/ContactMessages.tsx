import ContactCard from '../ContactCard'
import { ContactCardDiv, ContactMessagesDiv, MessagesSearchBar, MessagesTitle } from './styles'
import { contacts } from '../../pages/MessagesPage/data'
import { ContactInfo } from '../ContactCard/ContactCard'
import { SearchIcon } from '../../assets'
import { useState } from 'react'

interface ContactMessagesProps {
  selectedContactID: string
  handleSelectContact: (contact: ContactInfo) => void
}

const ContactMessages = ({ selectedContactID, handleSelectContact }: ContactMessagesProps) => {
  const [searchText, setSearchText] = useState('')

  const handleSearchBar = event => {
    setSearchText(event.target.value)
  }

  return (
    <ContactMessagesDiv>
      <MessagesTitle>Messages</MessagesTitle>
      <MessagesSearchBar
        icon={SearchIcon}
        value={searchText}
        onChange={handleSearchBar}
        placeholder="Find a message..."
      />
      <ContactCardDiv>
        {contacts &&
          contacts.map(
            contact =>
              contact.primaryInfo?.toLowerCase().includes(searchText.toLowerCase()) && (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onClick={() => handleSelectContact(contact)}
                  isSelected={selectedContactID === contact.id}
                />
              )
          )}
      </ContactCardDiv>
    </ContactMessagesDiv>
  )
}

export default ContactMessages
