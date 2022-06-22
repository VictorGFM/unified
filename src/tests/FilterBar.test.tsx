import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import FilterBar from '../components/FilterBar'

describe('<FilterBar/>', () => {
  it('should show match snapshot', () => {
    const component = render(<FilterBar />)

    expect(component).toMatchSnapshot()
  })
})
