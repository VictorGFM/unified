import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import NotificationCard from '../components/NotificationCard'
import { notifications } from '../components/Notifications/data'

describe('<NotificationCard/>', () => {
  it('should show match snapshot', () => {
    const component = render(
      <NotificationCard notification={notifications[0]} onClick={() => {}} />
    )

    expect(component).toMatchSnapshot()
  })
})
