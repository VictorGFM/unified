import {
  ContactsDiv,
  ContactsHeader,
  ContactsList,
  ContactsPageDiv,
  ContactsSearchBar,
} from './styles'
import Button from '../../components/Button'
import { SearchIcon } from '../../assets'
import ContactCard from '../../components/ContactCard'
import { contacts } from '../MessagesPage/data'

const ContactsPage = () => {
  return (
    <ContactsPageDiv>
      <ContactsDiv>
        <ContactsHeader>
          <ContactsSearchBar placeholder="Find a contact..." icon={SearchIcon} />
          <Button text="Create Contact" />
        </ContactsHeader>
        <ContactsList>
          {contacts && contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)}
        </ContactsList>
      </ContactsDiv>
    </ContactsPageDiv>
  )
}

export default ContactsPage
