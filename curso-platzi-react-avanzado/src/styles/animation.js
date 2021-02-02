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

const skeletonBackground = (light) => (
  css`
      background: ${!light
          ? css`linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%)`
          : css`linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%)`};
          background-size:400% 400%;
          animation: ${skeletonLoading} 1.2s ease-in-out infinite;
  `
)

const skeletonLoading = keyframes`
  from {
      background-position:0% 0%;
  }
  to {
      background-position: -135% 0%;
  }
`

export const skeletonStyle = (light = true) => skeletonBackground(light)
