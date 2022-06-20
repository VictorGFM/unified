import { InputBarDiv, InputBarInput, InputButton, InputButtonIcon } from './styles'

interface InputBarProps {
  icon?: string
  className?: string
  placeholder?: string
}

const InputBar = ({ icon, className, placeholder }: InputBarProps) => {
  return (
    <InputBarDiv className={className}>
      <InputBarInput placeholder={placeholder} />
      <InputButton>
        <InputButtonIcon src={icon} />
      </InputButton>
    </InputBarDiv>
  )
}

export default InputBar
