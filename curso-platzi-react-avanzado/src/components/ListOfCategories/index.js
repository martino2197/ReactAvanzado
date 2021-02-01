import React, { useEffect, useState } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  // useEffect acepta una funcion que sera la que se ejecute cada vez que se renderice el componente
  useEffect(function () {
    window.fetch('https://petgram-server-martino2197.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        // setCategories es el metodo para actualizar categories
        setCategories(response)
      })
  }, [])
  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {... category} /></Item>)
      }
    </List>
  )
}
