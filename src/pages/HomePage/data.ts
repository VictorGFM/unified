import { NumberInteractions, PostInterface } from '../../components/Post/Post'
import { AndromedaImage } from '../../assets'

export const interactions: NumberInteractions[] = [
  {
    likes: 237,
    comments: 15,
    shares: 10,
  },
  {
    likes: 107,
    comments: 10,
    shares: 7,
  },
]

export const posts: PostInterface[] = [
  {
    id: '1',
    contactName: 'Victor Moraes',
    postTime: '1h',
    socialType: 'Instagram',
    postDescription: 'Look at this galaxy! Its so beautiful...',
    postImage: AndromedaImage,
    numberInteractions: interactions[0],
  },
  {
    id: '2',
    contactName: 'Victor Moraes',
    postTime: '3h',
    socialType: 'Twitter',
    postDescription:
      'So, this is a description of a Twitter post, but right after an Instagram post. All in the same place, awesome,' +
      ' isnt it?',
    numberInteractions: interactions[1],
  },
]
