import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import SocialMediaButton from '../components/SocialMediaButton'
import { AppIcon } from '../assets'

describe('<SocialMediaButton/>', () => {
  it('should show match snapshot', () => {
    const component = render(<SocialMediaButton icon={AppIcon} />)

    expect(component).toMatchSnapshot()
  })
})
