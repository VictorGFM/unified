import { InputBarDiv, InputBarInput, InputButton, InputButtonIcon } from './styles'

interface InputBarProps {
  icon?: string
  className?: string
  value: string
  placeholder?: string
  onChange: (event) => void
}

const InputBar = ({ icon, className, value, placeholder, onChange }: InputBarProps) => {
  return (
    <InputBarDiv className={className}>
      <InputBarInput placeholder={placeholder} value={value} onChange={onChange} />
      <InputButton>
        <InputButtonIcon src={icon} />
      </InputButton>
    </InputBarDiv>
  )
}

export default InputBar
