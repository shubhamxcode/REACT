import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data=useLoaderData( )
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/shubhamxcode')
    //   .then((res)=>{ return res.json()})
    //   .then((data)=>{
    //     setdata(data)
    //   })
    // },[])
    
  return (
    <div className='bg-gray-600 text-center text-3xl text-white'>Github Follower: {data.followers}
    <img src={data.avatar_url} alt="github_picture" /></div>
  )
}



export default Github

export const githubinfoloader = async () => {
  const response = await fetch('https://api.github.com/users/shubhamxcode')
  return response.json()
}
