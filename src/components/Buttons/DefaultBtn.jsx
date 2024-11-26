import React from 'react'

const DefaultBtn = ({BtnType, btnValue}) => {
  return (
    <button type={BtnType} className='bg-purple-700 text-white py-2 px-8 rounded'>{btnValue}</button>
  )
}

export default DefaultBtn