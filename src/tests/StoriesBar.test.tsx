import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import StoriesBar from '../components/StoriesBar'

describe('<StoriesBar/>', () => {
  it('should show match snapshot', () => {
    const component = render(<StoriesBar />)

    expect(component).toMatchSnapshot()
  })
})
