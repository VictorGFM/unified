import { AlfredoPhotoIcon, ContactPhotoIcon } from '../../assets'
import ContactStory from '../ContactStory'
import StoriesBarButton from '../StoriesBarButton'
import { StoriesBarDiv, ContactStoriesDiv } from './styles'

const StoriesBar = () => {
  return (
    <StoriesBarDiv>
      <StoriesBarButton direction="left" />
      <ContactStoriesDiv>
        <ContactStory contactName="Alfredo" contactPhoto={AlfredoPhotoIcon} />
        <ContactStory contactName="Contact Name" contactPhoto={ContactPhotoIcon} />
        <ContactStory contactName="Contact Name" contactPhoto={ContactPhotoIcon} />
        <ContactStory contactName="Contact Name" contactPhoto={ContactPhotoIcon} />
        <ContactStory contactName="Contact Name" contactPhoto={ContactPhotoIcon} />
        <ContactStory contactName="Contact Name" contactPhoto={ContactPhotoIcon} />
      </ContactStoriesDiv>
      <StoriesBarButton direction="right" />
    </StoriesBarDiv>
  )
}

export default StoriesBar
