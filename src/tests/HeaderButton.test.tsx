import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import HeaderButton from '../components/HeaderButton'

describe('<HeaderButton/>', () => {
  it('should show match snapshot', () => {
    const component = render(
      <Router>
        <Routes>
          <Route path="*" element={<HeaderButton />} />
        </Routes>
      </Router>
    )

    expect(component).toMatchSnapshot()
  })
})
