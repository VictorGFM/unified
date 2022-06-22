import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Message from '../components/Message'
import { messages } from '../components/Chat/data'

describe('<Message/>', () => {
  it('should show match snapshot', () => {
    const component = render(<Message message={messages[0]} />)

    expect(component).toMatchSnapshot()
  })
})
