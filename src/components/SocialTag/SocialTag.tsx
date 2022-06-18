import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../assets'
import { SocialIcon, SocialTagDiv } from './styles'

interface SocialTagProps {
  socialType: string
}

const SocialTag = ({ socialType }: SocialTagProps) => {
  const socialImage = {
    Instagram: InstagramIcon,
    Twitter: TwitterIcon,
    Facebook: FacebookIcon,
  }

  return (
    <SocialTagDiv>
      <SocialIcon src={socialImage[socialType]} />
    </SocialTagDiv>
  )
}

export default SocialTag
