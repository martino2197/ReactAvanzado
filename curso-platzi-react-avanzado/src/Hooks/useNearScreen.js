
import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  // la prop ref nos permite capturar elemento del DOM, guardamos esa referencia en la constante
  const refElement = useRef(null)
  const [show, setShow] = useState(false)

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

  return [show, refElement]
}
