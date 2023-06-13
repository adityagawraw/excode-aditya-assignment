import React from 'react'
import Topics from './Topics'

const TopicsList = () => {
  return (
    <div className='border  bg-[#f9fbfc] my-5'>
        <p className= 'px-2 sml:px-4 border-b py-2 font-semibold'>Recommended Topics</p>
        <Topics/>
        <Topics/>
        <Topics/>
    </div>
  )
}

export default TopicsList