import { SocialMediaButtonDiv, SelectedBar, Icon } from './styles'

interface SocialMediaButtonProps {
  icon: string
  isSelected?: boolean
}

const SocialMediaButton = ({ icon, isSelected }: SocialMediaButtonProps) => {
  return (
    <SocialMediaButtonDiv isSelected={isSelected}>
      <Icon src={icon} />
      {isSelected && <SelectedBar />}
    </SocialMediaButtonDiv>
  )
}

export default SocialMediaButton
