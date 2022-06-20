import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 70px;
  box-sizing: border-box;
  border-bottom: 1px solid ${COLORS.GREY.THREE};

  background-color: ${COLORS.WHITE.ONE};
`

export const Logo = styled.img`
  width: 138px;
  height: 35px;

  cursor: pointer;
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  position: absolute;
  right: 0px;

  width: 376px;
  height: 46px;
  margin-right: 20px;
`
