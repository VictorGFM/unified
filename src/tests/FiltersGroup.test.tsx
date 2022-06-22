import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import FiltersGroup from '../components/FiltersGroup'
import { Filters } from '../components/FilterBar/data'

describe('<FiltersGroup/>', () => {
  it('should show match snapshot', () => {
    const component = render(<FiltersGroup label="Posts" filters={Filters['Posts']} />)

    expect(component).toMatchSnapshot()
  })
})
