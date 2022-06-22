import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

import ContactMessages from '../components/ContactMessages'

describe('<ContactMessages/>', () => {
  it('should show match snapshot', () => {
    const component = render(
      <ContactMessages selectedContactID="someContactID-123" handleSelectContact={() => {}} />
    )

    expect(component).toMatchSnapshot()
  })
})
