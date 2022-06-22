import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Button from '../components/Button'

describe('<Button/>', () => {
  it('should show match snapshot', () => {
    const component = render(<Button text="some test button" />)

    expect(component).toMatchSnapshot()
  })
})
