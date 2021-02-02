import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { CategoryLoading } from '../CategoryLoading'

import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

// CUSTOM HOOK
function useCategoriesData () {
  // setear el estado inicial
  const [categories, setCategories] = useState([])

  // podemos tener mas estados en un custom hook
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-martino2197.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        // setCategories es el metodo para actualizar categories
        setCategories(response)
        setLoading(false)
      })
      // la dependencia hace que se ejecute el efecto cada vez que cambie
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  // custom Hook
  const { categories, loading } = useCategoriesData()

  // setear el estado inicial
  const [showFixed, setShowFixed] = useState(false)
  // useEffect acepta una funcion que sera la que se ejecute cada vez que se renderice el componente

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
    // <List className={fixed ? 'fixed' : ''}>
    <List fixed={fixed}>
      {
        loading ? [1, 2, 3, 4].map((x) => <Item key={x}><CategoryLoading light='true' /></Item>) : categories.map(category => <Item key={category.id}><Category {... category} /></Item>)
    }
    </List>
  )

  // if (loading) {
  //   return 'Cargando...'
  // }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
