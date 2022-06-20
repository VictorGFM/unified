import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { AppDiv, ContentDiv } from './styles'
import Header from '../components/Header'
import SocialMediaBar from '../components/SocialMediaBar'
import HomePage from '../pages/HomePage'
import MessagesPage from '../pages/MessagesPage'

const App = () => {
  return (
    <Router>
      <AppDiv>
        <Header />
        <SocialMediaBar />
        <ContentDiv>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/contacts" element={null} />
            <Route path="/groups" element={null} />
            <Route path="/instagram" element={null} />
            <Route path="/twitter" element={null} />
            <Route path="/facebook" element={null} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ContentDiv>
      </AppDiv>
    </Router>
  )
}

export default App
