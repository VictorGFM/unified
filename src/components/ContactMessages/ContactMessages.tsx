import ContactCard from '../ContactCard'
import { ContactCardDiv, ContactMessagesDiv, MessagesSearchBar, MessagesTitle } from './styles'
import { contacts } from '../../pages/MessagesPage/data'
import { ContactInfo } from '../ContactCard/ContactCard'
import { SearchIcon } from '../../assets'

interface ContactMessagesProps {
  selectedContactID: string
  handleSelectContact: (contact: ContactInfo) => void
}

const ContactMessages = ({ selectedContactID, handleSelectContact }: ContactMessagesProps) => {
  return (
    <ContactMessagesDiv>
      <MessagesTitle>Messages</MessagesTitle>
      <MessagesSearchBar icon={SearchIcon} placeholder="Find a message..." />
      <ContactCardDiv>
        {contacts &&
          contacts.map(contact => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onClick={() => handleSelectContact(contact)}
              isSelected={selectedContactID === contact.id}
            />
          ))}
      </ContactCardDiv>
    </ContactMessagesDiv>
  )
}

export default ContactMessages
