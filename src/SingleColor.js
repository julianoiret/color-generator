import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {

  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',');
  // console.log(bcg);
  const hex = rgbToHex(...rgb);
  // console.log(hexColor);
  const hexValue = `#${hexColor}`

  // optional, to hide 'copied to clipboard' after you copy
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  },[alert])
  

  return <article 
  className={`color ${index > 10 && 'color-light'}`} 
  style={{ backgroundColor: `rgb(${bcg})` }}
  onClick={() => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }}
  >
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>{hexValue}</p>
    {/* if alert is true then copy to clipboard */}
    {alert && <p className='alert'>copied to clipboard</p>}
  </article>
}

export default SingleColor
