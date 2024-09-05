import React from 'react'

const MainTitle = ({ children }) => {
  return (
    <>
      <h1 className='flex justify-center text-center flex-wrap items-center py-5 text-title_color text-4xl font-bold font-sans'>
        {children}
      </h1>
    </>
  )
}

export { MainTitle }
