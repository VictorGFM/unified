import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import SocialMediaBar from '../components/SocialMediaBar'

describe('<SocialMediaBar/>', () => {
  it('should show match snapshot', () => {
    const component = render(
      <Router>
        <Routes>
          <Route path="*" element={<SocialMediaBar />} />
        </Routes>
      </Router>
    )

    expect(component).toMatchSnapshot()
  })
})
