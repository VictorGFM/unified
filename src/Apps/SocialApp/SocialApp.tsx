import { Routes, Route, Navigate } from 'react-router-dom'

import { AppDiv, ContentDiv, SocialMediaApp } from './styles'

import SocialMediaBar from '../../components/SocialMediaBar'
import { TwitterAppImage, InstagramAppImage, FacebookAppImage } from '../../assets'

const SocialApp = () => {
  return (
    <AppDiv>
      <SocialMediaBar />
      <ContentDiv>
        <Routes>
          <Route path="/instagram" element={<SocialMediaApp src={InstagramAppImage} />} />
          <Route path="/twitter" element={<SocialMediaApp src={TwitterAppImage} />} />
          <Route path="/facebook" element={<SocialMediaApp src={FacebookAppImage} />} />
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </ContentDiv>
    </AppDiv>
  )
}

export default SocialApp
