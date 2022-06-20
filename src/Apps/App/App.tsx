import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import UnifiedApp from '../UnifiedApp'
import SocialMediaApp from '../SocialApp'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app/*" element={<UnifiedApp />} />
        <Route path="/social/*" element={<SocialMediaApp />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </Router>
  )
}

export default App
