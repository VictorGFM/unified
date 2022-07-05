import { InputBarDiv, InputBarInput, InputButton, InputButtonIcon } from './styles'

interface InputBarProps {
  icon?: string
  className?: string
  value: string
  placeholder?: string
  onChange: (event) => void
  onKeyDown?: (event) => void
  onClick?: () => void
}

const InputBar = ({
  icon,
  className,
  value,
  placeholder,
  onChange,
  onKeyDown,
  onClick,
}: InputBarProps) => {
  return (
    <InputBarDiv className={className}>
      <InputBarInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <InputButton onClick={onClick}>
        <InputButtonIcon src={icon} />
      </InputButton>
    </InputBarDiv>
  )
}

export default InputBar
