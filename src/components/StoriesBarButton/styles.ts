import styled from 'styled-components'

export const StoriesBarButtonDiv = styled.div<{ direction: string }>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  height: 25px;

  background-color: yellow;
  cursor: pointer;

  ${({ direction }) =>
    direction === 'right'
      ? `
    right: 8px;
    img {
      transform: rotate(180deg);
    }
    `
      : `
    left: 8px;
    `}
`

export const StoriesBarButtonIcon = styled.img`
  height: 20px;
`
