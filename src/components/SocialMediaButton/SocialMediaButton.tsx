import { SocialMediaButtonDiv, SelectedBar, Icon } from './styles'

const SocialMediaButton = ({ icon }) => {
  return (
    <SocialMediaButtonDiv>
      <Icon src={icon} />
      <SelectedBar />
    </SocialMediaButtonDiv>
  )
}

export default SocialMediaButton
