import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import FilterOption from '../components/FilterOption'

describe('<FilterOption/>', () => {
  it('should show match snapshot', () => {
    const component = render(<FilterOption filterLabel="Some filter label" />)

    expect(component).toMatchSnapshot()
  })
})
