import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const NotificationsNumberDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 25px;
  height: 20px;

  color: white;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: bold;

  background-color: ${COLORS.RED.ONE};
  border-radius: 50%;
`
