import { SocialMediaButtonDiv, SelectedBar, Icon } from './styles'

interface SocialMediaButtonProps {
  icon: string
  isSelected?: boolean
  handleClick?: () => void
}

const SocialMediaButton = ({ icon, isSelected, handleClick }: SocialMediaButtonProps) => {
  return (
    <SocialMediaButtonDiv isSelected={isSelected} onClick={handleClick}>
      <Icon src={icon} />
      {isSelected && <SelectedBar />}
    </SocialMediaButtonDiv>
  )
}

export default SocialMediaButton
