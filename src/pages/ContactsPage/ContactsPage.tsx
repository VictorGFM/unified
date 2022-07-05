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
import { useState } from 'react'

const ContactsPage = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearchBar = event => {
    setSearchText(event.target.value)
  }
  return (
    <ContactsPageDiv>
      <ContactsDiv>
        <ContactsHeader>
          <ContactsSearchBar
            value={searchText}
            onChange={handleSearchBar}
            placeholder="Find a contact..."
            icon={SearchIcon}
          />
          <Button text="Create Contact" />
        </ContactsHeader>
        <ContactsList>
          {contacts &&
            contacts.map(
              contact =>
                contact.contactName.toLowerCase().includes(searchText.toLowerCase()) && (
                  <ContactCard key={contact.id} contact={contact} />
                )
            )}
        </ContactsList>
      </ContactsDiv>
    </ContactsPageDiv>
  )
}

export default ContactsPage
