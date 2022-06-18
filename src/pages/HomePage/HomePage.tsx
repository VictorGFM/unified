import FilterBar from '../../components/FilterBar'
import StoriesBar from '../../components/StoriesBar'
import Post from '../../components/Post'
import { HomePageDiv } from './styles'
import { posts } from './data'

const HomePage = () => {
  return (
    <HomePageDiv>
      <FilterBar />
      <StoriesBar />
      {posts?.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </HomePageDiv>
  )
}

export default HomePage
