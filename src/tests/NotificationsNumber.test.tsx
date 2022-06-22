import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import NotificationsNumber from '../components/NotificationsNumber'

describe('<NotificationsNumber/>', () => {
  it('should show match snapshot', () => {
    const component = render(<NotificationsNumber number={7} />)

    expect(component).toMatchSnapshot()
  })
})
