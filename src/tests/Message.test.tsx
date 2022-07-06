import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Message from '../components/Message'
import { defaultMessages } from '../pages/MessagesPage/data'

describe('<Message/>', () => {
  it('should show match snapshot', () => {
    const component = render(<Message message={defaultMessages.instagram[0].messages[0]} />)

    expect(component).toMatchSnapshot()
  })
})
