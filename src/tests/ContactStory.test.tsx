import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import ContactStory from '../components/ContactStory'
import { AlfredoPhotoIcon } from '../assets'

describe('<ContactStory/>', () => {
  it('should show match snapshot', () => {
    const component = render(<ContactStory contactName="Alfredo" contactPhoto={AlfredoPhotoIcon} />)

    expect(component).toMatchSnapshot()
  })
})
