import { NumberInteractions, PostInterface } from '../../components/Post/Post'
import { AlfredoPhotoIcon, AndromedaImage, ContactPhotoIcon, ProfilePhotoIcon } from '../../assets'

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
  {
    likes: 5,
    comments: 2,
    shares: 1,
  },
  {
    likes: 527,
    comments: 132,
    shares: 97,
  },
]

export const posts: PostInterface[] = [
  {
    id: '1',
    contactName: 'Victor Moraes',
    contactPhoto: ProfilePhotoIcon,
    contactGroup: 'Grupo da Família',
    postTime: '1h',
    socialType: 'Instagram',
    postDescription: 'Look at this galaxy! Its so beautiful...',
    postImage: AndromedaImage,
    numberInteractions: interactions[0],
  },
  {
    id: '2',
    contactName: 'Victor Moraes',
    contactPhoto: ProfilePhotoIcon,
    contactGroup: 'Grupo da Família',
    postTime: '3h',
    socialType: 'Twitter',
    postDescription:
      'So, this is a description of a Twitter post, but right after an Instagram post. All in the same place, awesome,' +
      ' isnt it?',
    numberInteractions: interactions[1],
  },
  {
    id: '3',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    contactGroup: 'Grupo dos Canários',
    postTime: '15h',
    socialType: 'Facebook',
    postDescription: 'Some post description...',
    numberInteractions: interactions[2],
  },
  {
    id: '4',
    contactName: 'Alfredo',
    contactPhoto: AlfredoPhotoIcon,
    contactGroup: 'Grupo dos Amigos',
    postTime: '21h',
    socialType: 'Twitter',
    postDescription: 'Au Au Au...',
    numberInteractions: interactions[3],
  },
]
