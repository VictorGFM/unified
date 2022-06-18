import { Button, ButtonImage, PostButtonDiv, NumberInteractions } from './styles'

interface PostButtonProps {
  buttonImage: string
  numberInteractions: number
}

const PostButton = ({ buttonImage, numberInteractions }: PostButtonProps) => {
  return (
    <PostButtonDiv>
      <Button>
        <ButtonImage src={buttonImage} />
      </Button>
      <NumberInteractions>{numberInteractions}</NumberInteractions>
    </PostButtonDiv>
  )
}

export default PostButton
