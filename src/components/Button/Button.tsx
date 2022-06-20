import { ButtonDiv } from './styles'

interface ButtonProps {
  text?: string
  onClick?: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <ButtonDiv onClick={onClick}>{text}</ButtonDiv>
}

export default Button
