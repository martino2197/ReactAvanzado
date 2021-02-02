import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  // setear el estado inicial
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  // useEffect acepta una funcion que sera la que se ejecute cada vez que se renderice el componente
  useEffect(function () {
    window.fetch('https://petgram-server-martino2197.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        // setCategories es el metodo para actualizar categories
        setCategories(response)
      })
      // la dependencia hace que se ejecute el efecto cada vez que cambie
  }, [])
  // useEddect para mostrar las categorias cuando el scroll baje
  useEffect(function (params) {
    // funcion onScroll para verificar el movimiento del scroll
    const onScroll = e => {
      // si el scroll en Y es mayor a 200 entonces nexShowFixed == true
      const newShowFixed = window.scrollY > 200
      // si el
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    // escuchar el movimiento del scroll, se suscribe un evento
    document.addEventListener('scroll', onScroll)
    // limpiamos el efecto cada vez que se vuelva a ejecutar
    return () => document.removeEventListener('scroll', onScroll)
    // la dependencia hace que se ejecute el efecto cada vez que cambie [showFixed]
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
      categories.map(category => <Item key={category.id}><Category {... category} /></Item>)
    }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
