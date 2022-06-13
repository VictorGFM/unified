import { ArrowIcon } from '../../assets'
import { StoriesBarButtonDiv, StoriesBarButtonIcon } from './styles'

interface StoriesBarButtonProps {
  direction: string
}

const StoriesBarButton = ({ direction }: StoriesBarButtonProps) => {
  return (
    <StoriesBarButtonDiv direction={direction}>
      <StoriesBarButtonIcon src={ArrowIcon} />
    </StoriesBarButtonDiv>
  )
}

export default StoriesBarButton
