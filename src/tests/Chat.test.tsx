import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import Chat from '../components/Chat'
import { contacts } from '../pages/MessagesPage/data'

describe('<Chat/>', () => {
  it('should show match snapshot', () => {
    const component = render(<Chat contact={contacts[0]} />)

    expect(component).toMatchSnapshot()
  })
})
