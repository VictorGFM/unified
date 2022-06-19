import { AlfredoPhotoIcon, ContactPhotoIcon } from '../../assets'
import { ContactInfo } from '../../components/ContactCard/ContactCard'

export const contacts: ContactInfo[] = [
  {
    id: '1',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    status: 'online',
    primaryInfo: 'Some message...',
    secondaryInfo: 'Dec 15, 2021',
  },
  {
    id: '2',
    contactName: 'Alfredo',
    contactPhoto: AlfredoPhotoIcon,
    status: 'online',
    primaryInfo: 'Au Au Au...',
    secondaryInfo: 'Dec 5, 2021',
    contactNotifications: {
      total: 11,
      messages: {
        total: 11,
        instagram: 0,
        twitter: 10,
        facebook: 1,
      },
    },
  },
  {
    id: '3',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    contactNotifications: {
      total: 41,
      messages: {
        total: 31,
        instagram: 17,
        twitter: 11,
        facebook: 3,
      },
      stories: {
        total: 5,
        instagram: 3,
        facebook: 2,
      },
    },
  },
  {
    id: '4',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
  },
  {
    id: '5',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
  },
  {
    id: '6',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
  },
]
