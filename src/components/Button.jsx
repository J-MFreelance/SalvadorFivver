import React from 'react'

const Button = ({ nombre }) => {
  return (
    <button className='bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded-lg text-xs'>
      {nombre}
    </button>
  )
}

export default Button