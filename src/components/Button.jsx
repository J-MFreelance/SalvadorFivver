import React from 'react'

const Button = ({ nombre, color, link }) => {
  return (
    <a className={`${color} hover:bg-blue-800 text-white font-medium py-1 px-2 rounded-lg text-xs`} href={link} target='_blank'>
      {nombre}
    </a>
  )
}

export default Button