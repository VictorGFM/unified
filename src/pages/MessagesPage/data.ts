import { AlfredoPhotoIcon, ContactPhotoIcon } from '../../assets'
import { ContactInfo } from '../../components/ContactCard/ContactCard'
import dayjs from 'dayjs'

export const defaultMessages = {
  instagram: [
    {
      date: dayjs('2021-09-02'),
      messages: [
        {
          text: 'My message...',
          author: 'Victor Moraes',
          datetime: dayjs('2021-09-02T13:05:00Z'),
        },
      ],
    },
    {
      date: dayjs('2021-09-03'),
      messages: [
        {
          text: 'Some message...',
          author: 'Contact Name',
          datetime: dayjs('2021-09-03T14:10:00Z'),
        },
      ],
    },
  ],
  twitter: [],
  facebook: [],
}

export const contacts: ContactInfo[] = [
  {
    id: '1',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    status: 'online',
    primaryInfo: 'Some message...',
    secondaryInfo: 'Dec 15, 2021',
    messages: {
      instagram: [
        {
          date: dayjs('2021-09-05'),
          messages: [
            {
              text: 'My message...',
              author: 'Victor Moraes',
              datetime: dayjs('2021-09-05T22:10:00Z'),
            },
          ],
        },
        {
          date: dayjs('2021-12-15'),
          messages: [
            {
              text: 'Some message...',
              author: 'Contact Name',
              datetime: dayjs('2021-12-15T18:20:00Z'),
            },
          ],
        },
      ],
      twitter: [],
      facebook: [],
    },
  },
  {
    id: '2',
    contactName: 'Alfredo',
    contactPhoto: AlfredoPhotoIcon,
    status: 'online',
    primaryInfo: 'Au Au Au...',
    secondaryInfo: 'Dec 5, 2021',
    contactNotifications: {
      total: 5,
      messages: {
        total: 5,
        instagram: 1,
        twitter: 3,
        facebook: 1,
      },
    },
    messages: {
      instagram: [
        {
          date: dayjs('2021-09-05'),
          messages: [
            {
              text: 'My message...',
              author: 'Victor Moraes',
              datetime: dayjs('2021-09-05T22:10:00Z'),
            },
          ],
        },
        {
          date: dayjs('2021-12-05'),
          messages: [
            {
              text: '( ._.)',
              author: 'Alfredo',
              datetime: dayjs('2021-12-05T18:20:00Z'),
            },
          ],
        },
      ],
      twitter: [
        {
          date: dayjs('2021-09-07'),
          messages: [
            {
              text: '( ._.)',
              author: 'Alfredo',
              datetime: dayjs('2021-09-07T18:20:00Z'),
            },
          ],
        },
        {
          date: dayjs('2021-09-15'),
          messages: [
            {
              text: '( ._.)',
              author: 'Alfredo',
              datetime: dayjs('2021-09-15T20:20:00Z'),
            },
            {
              text: '( ._.)',
              author: 'Alfredo',
              datetime: dayjs('2021-09-15T20:30:00Z'),
            },
          ],
        },
      ],
      facebook: [
        {
          date: dayjs('2021-12-05'),
          messages: [
            {
              text: 'Hi Alfredo!',
              author: 'Victor Moraes',
              datetime: dayjs('2021-12-05T21:45:00Z'),
            },
            {
              text: 'Au Au Au...',
              author: 'Alfredo',
              datetime: dayjs('2021-12-05T22:07:00Z'),
            },
          ],
        },
      ],
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
    messages: {
      instagram: [
        {
          date: dayjs('2021-09-02'),
          messages: [
            {
              text: 'My message...',
              author: 'Victor Moraes',
              datetime: dayjs('2021-09-02T13:05:00Z'),
            },
          ],
        },
        {
          date: dayjs('2021-09-03'),
          messages: [
            {
              text: 'Some message...',
              author: 'Contact Name',
              datetime: dayjs('2021-09-03T14:10:00Z'),
            },
          ],
        },
      ],
      twitter: [
        {
          date: dayjs('2021-09-02'),
          messages: [
            {
              text: 'My message...',
              author: 'Victor Moraes',
              datetime: dayjs('2021-09-02T13:05:00Z'),
            },
          ],
        },
      ],
      facebook: [
        {
          date: dayjs('2021-09-03'),
          messages: [
            {
              text: 'Some message...',
              author: 'Contact Name',
              datetime: dayjs('2021-09-03T14:10:00Z'),
            },
          ],
        },
      ],
    },
  },
  {
    id: '4',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '5',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '6',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '7',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '8',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '9',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '10',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '11',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '12',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '13',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '14',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '15',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '16',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '17',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '18',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '19',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '20',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '21',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '22',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '23',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
  {
    id: '24',
    contactName: 'Contact Name',
    contactPhoto: ContactPhotoIcon,
    primaryInfo: 'Some message...',
    secondaryInfo: 'Sep 3, 2021',
    messages: defaultMessages,
  },
]
