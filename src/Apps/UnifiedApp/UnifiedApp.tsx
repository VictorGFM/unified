import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { AppDiv, ContentDiv } from './styles'
import Header from '../../components/Header'
import SocialMediaBar from '../../components/SocialMediaBar'
import HomePage from '../../pages/HomePage'
import MessagesPage from '../../pages/MessagesPage'
import ContactsPage from '../../pages/ContactsPage'
import GroupsPage from '../../pages/GroupsPage'

const UnifiedApp = () => {
  return (
    <AppDiv>
      <Header />
      <SocialMediaBar />
      <ContentDiv>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ContentDiv>
    </AppDiv>
  )
}

export default UnifiedApp
