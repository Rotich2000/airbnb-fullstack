'use client';
import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Container = ({children}: Props) => {
  return (
    <div
    className='w-5/6 mx-auto'
    >{children}</div>
  )
}

export default Container