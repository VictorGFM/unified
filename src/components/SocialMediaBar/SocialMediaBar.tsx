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
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export type SocialType = 'Unified' | 'Instagram' | 'Twitter' | 'Facebook'

const SocialMediaBar = () => {
  const [selectedSocial, setSelectedSocial] = useState('Unified')
  const navigate = useNavigate()

  const socialRoutes = {
    Unified: '/',
    Instagram: '/instragram',
    Twitter: '/twitter',
    Facebook: '/facebook',
  }

  const handleClickButton = (socialType: SocialType) => {
    setSelectedSocial(socialType)
    navigate(socialRoutes[socialType])
  }

  return (
    <SocialMediaBarDiv>
      <SocialMediaButtonsDiv>
        <SocialMediaButton
          icon={AppIcon}
          isSelected={selectedSocial === 'Unified'}
          handleClick={() => handleClickButton('Unified')}
        />
        <SocialMediaButton
          icon={InstagramIcon}
          isSelected={selectedSocial === 'Instagram'}
          handleClick={() => handleClickButton('Instagram')}
        />
        <SocialMediaButton
          icon={TwitterIcon}
          isSelected={selectedSocial === 'Twitter'}
          handleClick={() => handleClickButton('Twitter')}
        />
        <SocialMediaButton
          icon={FacebookIcon}
          isSelected={selectedSocial === 'Facebook'}
          handleClick={() => handleClickButton('Facebook')}
        />
      </SocialMediaButtonsDiv>
      <ToggleSocialMediaBardDiv>
        <ToggleSocialMediaBarButton src={ToggleSocialBarIcon} />
      </ToggleSocialMediaBardDiv>
    </SocialMediaBarDiv>
  )
}

export default SocialMediaBar
