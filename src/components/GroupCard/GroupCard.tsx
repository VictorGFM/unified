import { GroupCardDiv, GroupImage, GroupTitle } from './styles'

export interface Group {
  id: string
  name: string
  image: string
}

interface GroupCardProps {
  group: Group
}

const GroupCard = ({ group }: GroupCardProps) => {
  const { name, image } = group
  return (
    <GroupCardDiv>
      <GroupImage src={image} />
      <GroupTitle>{name}</GroupTitle>
    </GroupCardDiv>
  )
}

export default GroupCard
