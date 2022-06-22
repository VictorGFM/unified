import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import GroupCard from '../components/GroupCard'
import { groups } from '../pages/GroupsPage/data'

describe('<GroupCard/>', () => {
  it('should show match snapshot', () => {
    const component = render(<GroupCard group={groups[0]} />)

    expect(component).toMatchSnapshot()
  })
})
