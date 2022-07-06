import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import InputBar from '../components/InputBar'

describe('<InputBar/>', () => {
  it('should show match snapshot', () => {
    const component = render(<InputBar value="some value" onChange={() => {}} />)

    expect(component).toMatchSnapshot()
  })
})
