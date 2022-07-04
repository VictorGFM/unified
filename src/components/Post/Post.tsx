import { CommentIcon, LikeIcon, ProfilePhotoIcon, ShareIcon } from '../../assets'
import PostButton from '../PostButton'
import SocialTag from '../SocialTag'
import {
  ButtonsDiv,
  ContactName,
  ContactPhoto,
  ContactPhotoImage,
  PostDescription,
  PostDiv,
  PostImage,
  PostTime,
  PostHeader,
  PostInfoDiv,
  ContactNameDiv,
} from './styles'

export interface NumberInteractions {
  likes: number
  comments: number
  shares: number
}

export interface PostInterface {
  id: string
  contactName: string
  contactPhoto: string
  contactGroup?: string
  postTime: string
  socialType: string
  postDescription: string
  postImage?: string
  numberInteractions: NumberInteractions
}

interface PostProps {
  post: PostInterface
}

const Post = ({ post }: PostProps) => {
  const {
    contactName,
    contactPhoto,
    postTime,
    socialType,
    postDescription,
    postImage,
    numberInteractions,
  } = post
  return (
    <PostDiv>
      <PostHeader>
        <ContactPhoto>
          <ContactPhotoImage src={contactPhoto} />
        </ContactPhoto>
        <PostInfoDiv>
          <ContactNameDiv>
            <ContactName>{contactName}</ContactName>
            <PostTime>{postTime}</PostTime>
          </ContactNameDiv>
          <PostDescription>{postDescription}</PostDescription>
          <SocialTag socialType={socialType} />
        </PostInfoDiv>
      </PostHeader>
      {postImage && <PostImage src={postImage} />}
      <ButtonsDiv>
        <PostButton buttonImage={LikeIcon} numberInteractions={numberInteractions.likes} />
        <PostButton buttonImage={CommentIcon} numberInteractions={numberInteractions.comments} />
        <PostButton buttonImage={ShareIcon} numberInteractions={numberInteractions.shares} />
      </ButtonsDiv>
    </PostDiv>
  )
}

export default Post
