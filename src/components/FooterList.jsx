import React from 'react'
import footerListStyles from '../styles/footerList.module.css'
const FooterList = ({title, list1, list2, list3, list4, list5, list6, list7, list8, link1, link2, link3, link4, link5, link6, link7, link8}) => {
  return (
    <nav className={footerListStyles.container}>
        <h4>{title}</h4>
        <ul>
            <li><a href={link1}>{list1}</a></li>
            <li><a href={link2}>{list2}</a></li>
            <li><a href={link3}>{list3}</a></li>
            <li><a href={link4}>{list4}</a></li>
            <li><a href={link5}>{list5}</a></li>
            <li><a href={link6}>{list6}</a></li>
            <li><a href={link7}>{list7}</a></li>
            <li><a href={link8}>{list8}</a></li>
        </ul>
    </nav>
  )
}

export default FooterList