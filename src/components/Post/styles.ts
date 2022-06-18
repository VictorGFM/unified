import styled from 'styled-components'
import { COLORS } from '../../styles/global'

export const PostDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  border: solid ${COLORS.GREY.THREE} 1px;
  margin-bottom: 15px;

  background-color: ${COLORS.WHITE.ONE};
  border-radius: 7px;
  box-sizing: border-box;
`

export const PostHeader = styled.div`
  display: flex;
  flex: 1;
`

export const ContactPhoto = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid ${COLORS.GREY.ONE};
  margin: 8px 11px 7px 8px;

  box-sizing: border-box;
  border-radius: 100%;
`

export const ContactPhotoImage = styled.img`
  height: 100%;
`

export const PostInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;

  padding-top: 10px;
`

export const ContactNameDiv = styled.div`
  display: flex;

  width: 480px;
`

export const ContactName = styled.span`
  margin-right: 5px;

  font-size: 14px;
  font-weight: bold;
  line-height: 16.5px;
`

export const PostTime = styled.span`
  font-size: 12px;
  font-weight: normal;
  line-height: 18.5px;
  color: ${COLORS.GREY.SEVEN};
`

export const PostDescription = styled.span`
  flex: 1;

  width: 480px;

  font-size: 14px;
  line-height: 16.5px;
  text-align: left;
`

export const PostImage = styled.img`
  height: 300px;
`

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  margin: 5px 107px 5px 107px;

  box-sizing: border-box;
`
