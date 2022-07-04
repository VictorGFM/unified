import { GroupsDiv, GroupsHeader, GroupsList, GroupsPageDiv, GroupsSearchBar } from './styles'
import Button from '../../components/Button'
import { SearchIcon } from '../../assets'
import ContactCard from '../../components/ContactCard'
import { contacts } from '../MessagesPage/data'
import { groups } from './data'
import GroupCard from '../../components/GroupCard'

const GroupsPage = () => {
  return (
    <GroupsPageDiv>
      <GroupsDiv>
        <GroupsHeader>
          <GroupsSearchBar placeholder="Find a group..." icon={SearchIcon} />
          <Button text="Create Group" />
        </GroupsHeader>
        <GroupsList>
          {groups && groups.map(group => <GroupCard key={group.id} group={group} />)}
        </GroupsList>
      </GroupsDiv>
    </GroupsPageDiv>
  )
}

export default GroupsPage
