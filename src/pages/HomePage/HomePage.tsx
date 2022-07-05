import FilterBar from '../../components/FilterBar'
import StoriesBar from '../../components/StoriesBar'
import Post from '../../components/Post'
import { HomePageDiv } from './styles'
import { posts } from './data'
import { useEffect, useState } from 'react'
import { PostInterface } from '../../components/Post/Post'

const HomePage = () => {
  const [searchText, setSearchText] = useState('')
  const [postsFilters, setPostsFilters] = useState([])
  const [groupsFilters, setGroupsFilters] = useState([])
  const [othersFilters, setOthersFilters] = useState([])

  const handleSearchBar = event => {
    setSearchText(event.target.value)
  }

  const handleFilters = (operation: string, type: string, filterLabel: string) => {
    switch (type) {
      case 'Posts':
        updateFilters(operation, filterLabel, postsFilters, setPostsFilters)
        break
      case 'Groups':
        updateFilters(operation, filterLabel, groupsFilters, setGroupsFilters)
        break
      case 'Others':
        updateFilters(operation, filterLabel, othersFilters, setOthersFilters)
        break
    }
  }

  const updateFilters = (operation, filterLabel, filters, setFilters) => {
    if (operation == 'add') {
      setFilters([...filters, filterLabel])
    } else {
      setFilters(filters.filter(filter => filter !== filterLabel))
    }
  }

  const isFilteredPost = (post: PostInterface) => {
    const isFilteredBySearchTest =
      searchText.length > 0
        ? post.postDescription.toLowerCase().includes(searchText.toLowerCase())
        : true
    const isFilteredByPosts =
      postsFilters.length > 0 ? postsFilters.includes(post.socialType) : true
    const isFilteredByGroups =
      groupsFilters.length > 0 ? groupsFilters.includes(post.contactGroup) : true
    return isFilteredBySearchTest && isFilteredByPosts && isFilteredByGroups
  }

  return (
    <HomePageDiv>
      <FilterBar
        handleFilters={handleFilters}
        searchText={searchText}
        handleSearchBar={handleSearchBar}
      />
      <StoriesBar />
      {posts?.map(post => isFilteredPost(post) && <Post key={post.id} post={post} />)}
    </HomePageDiv>
  )
}

export default HomePage
