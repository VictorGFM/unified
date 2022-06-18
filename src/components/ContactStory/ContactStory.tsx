import { ContactPhoto, ContactStoryButton, ContactStoryDiv, ContactName } from './styles'

interface ContactStoryProps {
  contactName: string
  contactPhoto: string
}

const ContactStory = ({ contactName, contactPhoto }: ContactStoryProps) => {
  return (
    <ContactStoryDiv>
      <ContactStoryButton>
        <ContactPhoto src={contactPhoto} />
      </ContactStoryButton>
      <ContactName>{contactName}</ContactName>
    </ContactStoryDiv>
  )
}

export default ContactStory
