import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Notifications from '../components/Notifications'

describe('<Notifications/>', () => {
  it('should show match snapshot', () => {
    const component = render(<Notifications handleCloseNotifications={() => {}} />)

    expect(component).toMatchSnapshot()
  })
})
