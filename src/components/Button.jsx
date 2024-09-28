import React from 'react'

const Button = ({ nombre, color }) => {
  return (
    <button className={`${color} hover:bg-blue-800 text-white font-medium py-1 px-2 rounded-lg text-xs`}>
      {nombre}
    </button>
  )
}

export default Button