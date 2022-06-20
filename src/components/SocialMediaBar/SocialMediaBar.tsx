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
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export type SocialType = 'Unified' | 'Instagram' | 'Twitter' | 'Facebook'

const SocialMediaBar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const currentLocation = location.pathname

  const socialRoutes = {
    Unified: '/app',
    Instagram: '/social/instagram',
    Twitter: '/social/twitter',
    Facebook: '/social/facebook',
  }

  const handleClickButton = (socialType: SocialType) => {
    navigate(socialRoutes[socialType])
  }

  return (
    <SocialMediaBarDiv>
      {isOpen && (
        <SocialMediaButtonsDiv>
          <SocialMediaButton
            icon={AppIcon}
            isSelected={
              currentLocation !== socialRoutes['Instagram'] &&
              currentLocation !== socialRoutes['Twitter'] &&
              currentLocation !== socialRoutes['Facebook']
            }
            onClick={() => handleClickButton('Unified')}
          />
          <SocialMediaButton
            icon={InstagramIcon}
            isSelected={currentLocation === socialRoutes['Instagram']}
            onClick={() => handleClickButton('Instagram')}
          />
          <SocialMediaButton
            icon={TwitterIcon}
            isSelected={currentLocation === socialRoutes['Twitter']}
            onClick={() => handleClickButton('Twitter')}
          />
          <SocialMediaButton
            icon={FacebookIcon}
            isSelected={currentLocation === socialRoutes['Facebook']}
            onClick={() => handleClickButton('Facebook')}
          />
        </SocialMediaButtonsDiv>
      )}
      <ToggleSocialMediaBardDiv onClick={() => setIsOpen(!isOpen)}>
        <ToggleSocialMediaBarButton src={ToggleSocialBarIcon} isOpen={isOpen} />
      </ToggleSocialMediaBardDiv>
    </SocialMediaBarDiv>
  )
}

export default SocialMediaBar
