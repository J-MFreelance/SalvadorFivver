import React from 'react'

const Button = ({ nombre, color, link }) => {
  return (
    <a
      className={`${color} hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-sm`}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {nombre}
    </a>
  )
}

export default Button
