import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${COLORS.GREY.THREE};

  background-color: ${COLORS.WHITE.ONE};
`

export const SpaceDiv = styled.div`
  flex: 1;
`

export const Logo = styled.img`
  flex: 1;

  width: 138px;
  height: 35px;

  cursor: pointer;
`

export const ButtonsDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 20px;

  width: 376px;
  height: 46px;
  margin-right: 20px;
`
