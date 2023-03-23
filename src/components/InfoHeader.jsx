import React from 'react'
import { MdPhone, MdLocationPin} from "react-icons/md";

const InfoHeader = () => {
  return (
    <div className="header__info">
        <div className="header__phone">
          <MdPhone className="MdPhone" /> <span>+1 3006772050</span>
        </div>
        <div className="header__inside__info">
          <span>Get 50% off on selected items | Shop now</span>
        </div>
        <div className="header__location">
          <MdLocationPin />
          <span>Colombia</span>
        </div>
      </div>
  )
}

export default InfoHeader