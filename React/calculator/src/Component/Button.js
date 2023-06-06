import React from 'react'

const Button = ({value}) => {
  return (
        <button
            className='py-3 px-5  bg-slate-600 rounded-lg text-lg font-mono font-semibold text-gray-100 shadow-inner shadow-slate-100'
        >
            {value}
        </button>
  )
}

export default Button