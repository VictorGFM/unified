import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import SocialTag from '../components/SocialTag'

describe('<SocialTag/>', () => {
  it('should show match snapshot', () => {
    const component = render(<SocialTag socialType="Instagram" />)

    expect(component).toMatchSnapshot()
  })
})
