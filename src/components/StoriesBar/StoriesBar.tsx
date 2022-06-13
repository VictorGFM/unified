import ContactStory from '../ContactStory'
import StoriesBarButton from '../StoriesBarButton'
import { StoriesBarDiv, ContactStoriesDiv } from './styles'

const StoriesBar = () => {
  return (
    <StoriesBarDiv>
      <StoriesBarButton direction="left" />

      <ContactStoriesDiv>
        <ContactStory />
        <ContactStory />
        <ContactStory />
      </ContactStoriesDiv>

      <StoriesBarButton direction="right" />
    </StoriesBarDiv>
  )
}

export default StoriesBar
