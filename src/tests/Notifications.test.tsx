import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Notifications from '../components/Notifications'

describe('<Notifications/>', () => {
  it('should show match snapshot', () => {
    const component = render(
      <Router>
        <Routes>
          <Route path="*" element={<Notifications />} />
        </Routes>
      </Router>
    )
    expect(component).toMatchSnapshot()
  })
})
