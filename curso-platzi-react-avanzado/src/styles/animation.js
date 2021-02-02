import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
animation: ${time} ${fadeInKeyframes} ${type};
`
const slideInKeyframes = keyframes`
  from {
    transform: translate3d(0, -100px, 0) scale(0.5);
  }
  to {
    transform: translate3d(0, 0, 0) scale(0.5);
  }
`
export const slideIn = ({ time = '1s', type = 'ease' } = {}) => (
  css`animation: ${time} ${slideInKeyframes} ${type} forwards;`
)
