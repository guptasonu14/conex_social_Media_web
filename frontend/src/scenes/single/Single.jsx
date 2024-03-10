import Sidebar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import React from 'react'

const Single = () => {
  return (
    <div className="single">
    <SinglePost />
    <Sidebar />

  </div>
  )
}

export default Single