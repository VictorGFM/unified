import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 53px;

  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  color: ${COLORS.WHITE.ONE};

  border-radius: 10px;
  background-color: ${COLORS.PURPLE.ONE};
  cursor: pointer;
`
