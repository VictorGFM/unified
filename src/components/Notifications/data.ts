import { AlfredoPhotoIcon, ContactPhotoIcon } from '../../assets'
import { Notification } from '../NotificationCard/NotificationCard'

export const notifications: Notification[] = [
  {
    id: '1',
    contactName: 'Alfredo',
    contactPhoto: AlfredoPhotoIcon,
    description: 'liked your tweet.',
    time: '1h',
    socialType: 'Twitter',
  },
  {
    id: '2',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    description: 'liked your post.',
    time: '1h',
    socialType: 'Instagram',
  },
  {
    id: '3',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    description: 'shared your post.',
    time: '1h',
    socialType: 'Facebook',
  },
  {
    id: '4',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    description: 'liked your post.',
    time: '1h',
    socialType: 'Instagram',
  },
  {
    id: '5',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    description: 'liked your post.',
    time: '2h',
    socialType: 'Twitter',
  },
]
