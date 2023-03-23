import React from 'react'
import { MdFavorite } from 'react-icons/md'
import stylesHeaderItems from '../styles/headerItems.module.css'


const FavItem = () => {
  return (
    <div className={stylesHeaderItems.container}><MdFavorite className={stylesHeaderItems.MdFav}/>
    <span>Favorites</span>
    </div>
  )
}

export default FavItem