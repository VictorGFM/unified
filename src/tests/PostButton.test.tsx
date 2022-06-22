import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import PostButton from '../components/PostButton'
import { LikeIcon } from '../assets'

describe('<PostButton/>', () => {
  it('should show match snapshot', () => {
    const component = render(<PostButton buttonImage={LikeIcon} numberInteractions={5} />)

    expect(component).toMatchSnapshot()
  })
})
