import React, { useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // la prop ref nos permite capturar elemento del DOM, guardamos esa referencia en la constante
  const refElement = useRef(null)
  const [show, setShow] = useState(false)
  // creamos la key
  const key = `like-${id}`
  // el estado de los likes lo guardamos en local storage
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
      // La informacion que se almacena en el localStorage es un string. Por eso cuando hacemos el cambio de !liked lo que estamos enviando es una cadena de texto true o false. Si aun asi tienen duda pueden comprobarlo con typeof like
    } catch (error) {
      return false
    }
  })
  console.log(liked)
  // con este useEffect se esta haciendo un lazy-loader de los Articles
  useEffect(function (params) {
    Promise.resolve(typeof window.IntersectionObserver !== 'undefined'
      ? window.IntersectionObserver
      : import('intersection-observer')) // lo anterior es un Import Dinamico
      .then(() => {
      // no tenemos que devolver nada ya que al ser un pollyfill parchea directamente el objeto window

        // console.log(refElement.current)
        const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
          const { isIntersecting } = entries[0]
          // console.log({ isIntersecting })
          if (isIntersecting) {
            console.log('si')
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(refElement.current)
      // se ejecuta solo cuando cambia la referencia
      })
  }, [refElement])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }
  // if (!show) return null
  return (
    <Article ref={refElement}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size='32px' /> likes!
            </Button>
          </>
      }
    </Article>
  )
}
