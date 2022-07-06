import { GroupsDiv, GroupsHeader, GroupsList, GroupsPageDiv, GroupsSearchBar } from './styles'
import Button from '../../components/Button'
import { SearchIcon } from '../../assets'
import ContactCard from '../../components/ContactCard'
import { contacts } from '../MessagesPage/data'
import { groups } from './data'
import GroupCard from '../../components/GroupCard'
import { useState } from 'react'

const GroupsPage = () => {
  const [searchText, setSearchText] = useState('')

  const handleSearchBar = event => {
    setSearchText(event.target.value)
  }

  return (
    <GroupsPageDiv>
      <GroupsDiv>
        <GroupsHeader>
          <GroupsSearchBar
            value={searchText}
            onChange={handleSearchBar}
            placeholder="Find a group..."
            icon={SearchIcon}
            dataCY={`groups-search-bar`}
          />
          <Button text="Create Group" />
        </GroupsHeader>
        <GroupsList>
          {groups &&
            groups.map(
              group =>
                group.name.toLowerCase().includes(searchText.toLowerCase()) && (
                  <GroupCard key={group.id} group={group} />
                )
            )}
        </GroupsList>
      </GroupsDiv>
    </GroupsPageDiv>
  )
}

export default GroupsPage
