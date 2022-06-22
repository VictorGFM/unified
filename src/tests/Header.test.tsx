import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Header from '../components/Header'

describe('<Header/>', () => {
  it('should show match snapshot', () => {
    const component = render(
      <Router>
        <Routes>
          <Route path="*" element={<Header />} />
        </Routes>
      </Router>
    )

    expect(component).toMatchSnapshot()
  })
})
