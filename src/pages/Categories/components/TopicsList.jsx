import React, { useEffect, useState } from 'react'
import Topics from './Topics'
import { useSelector } from 'react-redux';

const TopicsList = ({setBlogEditorModal}) => {
  const { blogs } = useSelector((state) => state.topics);
  const [topics, setTopics]  = useState(blogs);
  useEffect(()=>{
    setTopics(blogs);
  },[blogs])
  return (
    <div className='border  bg-[#f9fbfc] my-5'>
        <p className= 'px-2 sml:px-4 border-b py-2 font-semibold'>Recommended Topics</p>
        {topics?.map((topic, index)=><Topics key={index} index={index} topic={topic} setBlogEditorModal={setBlogEditorModal}/>)}
    </div>
  )
}

export default TopicsList