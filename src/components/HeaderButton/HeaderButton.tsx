import { ButtonBackground, ButtonIcon } from './styles'

const HeaderButton = ({ icon }) => {
  return (
    <>
      <ButtonBackground>
        <ButtonIcon src={icon} />
      </ButtonBackground>
    </>
  )
}

export default HeaderButton
