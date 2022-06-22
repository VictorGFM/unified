import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Post from '../components/Post'
import { posts } from '../pages/HomePage/data'

describe('<Post/>', () => {
  it('should show match snapshot', () => {
    const component = render(<Post post={posts[0]} />)

    expect(component).toMatchSnapshot()
  })
})
