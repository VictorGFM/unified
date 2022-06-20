import { GroupCardDiv, GroupImage, GroupTitle } from './styles'

export interface Group {
  id: string
  title: string
  image: string
}

interface GroupCardProps {
  group: Group
}

const GroupCard = ({ group }: GroupCardProps) => {
  const { title, image } = group
  return (
    <GroupCardDiv>
      <GroupImage src={image} />
      <GroupTitle>{title}</GroupTitle>
    </GroupCardDiv>
  )
}

export default GroupCard
