import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { AppDiv, ContentDiv } from './styles'
import Header from '../components/Header'
import SocialMediaBar from '../components/SocialMediaBar'
import HomePage from '../pages/HomePage'

const App = () => {
  return (
    <Router>
      <AppDiv>
        <Header />
        <SocialMediaBar />
        <ContentDiv>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ContentDiv>
      </AppDiv>
    </Router>
  )
}

export default App
