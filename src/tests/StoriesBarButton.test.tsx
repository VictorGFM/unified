import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import StoriesBarButton from '../components/StoriesBarButton'

describe('<StoriesBarButton/>', () => {
  it('should show match snapshot', () => {
    const component = render(<StoriesBarButton direction="left" />)

    expect(component).toMatchSnapshot()
  })
})
