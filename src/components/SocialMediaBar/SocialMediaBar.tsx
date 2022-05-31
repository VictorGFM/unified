import {
  SocialMediaBarDiv,
  SocialMediaButtonsDiv,
  ToggleSocialMediaBardDiv,
  ToggleSocialMediaBarButton,
} from './styles'
import {
  AppIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  ToggleSocialBarIcon,
} from '../../assets'
import SocialMediaButton from '../SocialMediaButton'

const SocialMediaBar = () => {
  return (
    <SocialMediaBarDiv>
      <SocialMediaButtonsDiv>
        <SocialMediaButton icon={AppIcon} />
        <SocialMediaButton icon={InstagramIcon} />
        <SocialMediaButton icon={TwitterIcon} />
        <SocialMediaButton icon={FacebookIcon} />
      </SocialMediaButtonsDiv>
      <ToggleSocialMediaBardDiv>
        <ToggleSocialMediaBarButton src={ToggleSocialBarIcon} />
      </ToggleSocialMediaBardDiv>
    </SocialMediaBarDiv>
  )
}

export default SocialMediaBar
