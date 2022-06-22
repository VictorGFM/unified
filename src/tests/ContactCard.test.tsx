import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import { contacts } from '../pages/MessagesPage/data'
import ContactCard from '../components/ContactCard'

describe('<ContactCard/>', () => {
  it('should show match snapshot', () => {
    const component = render(<ContactCard contact={contacts[0]} />)

    expect(component).toMatchSnapshot()
  })
})
