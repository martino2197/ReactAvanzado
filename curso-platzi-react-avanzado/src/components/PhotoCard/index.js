import React from 'react'
import { Article, ImgWrapper, Img } from './styles'

// Custom Hooks
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useNearScreen } from '../../Hooks/useNearScreen'
import { useMutationToggleLike } from '../../Hooks/useMutationToggleLike'

import { FavButton } from '../FavButton'
// import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
// import { Button } from '../FavButton/styles'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

/** Component */
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, refElement] = useNearScreen()
  // creamos la key
  const key = `like-${id}`
  // Para el local storage
  const [liked, setLiked] = useLocalStorage(key, false)
  // console.log(liked)

  // para las mutaciones de los likes
  const { mutation, mutationLoading, mutationError } = useMutationToggleLike()
  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  // if (!show) return null
  return (
    <Article ref={refElement}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <FavButton
              liked={liked} likes={likes}
              onClick={handleFavClick}
            />
            {/* <FavButton liked={liked} likes={likes} onClick={handleFavClick} /> */}
            {/* <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} likes!
            </Button> */}
          </>
      }
    </Article>
  )
}
