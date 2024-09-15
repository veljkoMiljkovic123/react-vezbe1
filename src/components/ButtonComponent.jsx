import React from 'react'

function ButtonComponent({title,color}) {
  return (
    <button className='navbar_buttons_btn' style={{backgroundColor:color}}>{title}</button>
  )
}

export default ButtonComponent