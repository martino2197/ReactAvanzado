import React from 'react'
// import { Category } from './components/Category'
import { ListOfCategories } from '../components/ListOfCategories'
// import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
export const Home = ({ categoryId }) => {
  return (
    <><ListOfCategories /><ListOfPhotoCards categoryId={categoryId} /></>
  )
}
