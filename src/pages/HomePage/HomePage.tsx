import FilterBar from '../../components/FilterBar'
import StoriesBar from '../../components/StoriesBar'
import Post from '../../components/Post'
import { HomePageDiv } from './styles'

const HomePage = () => {
  return (
    <HomePageDiv>
      <FilterBar />
      <StoriesBar />
      <Post />
      <Post />
    </HomePageDiv>
  )
}

export default HomePage
