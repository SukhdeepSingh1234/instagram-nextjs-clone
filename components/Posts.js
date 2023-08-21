import React from 'react'
import Post from './Post'

function Posts() {
    const posts=[{
        id:'123',
        username:'SukhdeepSingh',
        userImg:'https://wallpapercave.com/wp/wp5388908.jpg',
        img:'https://wallpapercave.com/wp/wp5388908.jpg',
        caption:"Dil Da ni mada "
    },{
        id:'1234',
        username:'SukhdeepSingh',
        userImg:'https://wallpapercave.com/wp/wp5388908.jpg',
        img:'https://wallpapercave.com/wp/wp5388908.jpg',
        caption:"Dil Da ni mada "
    }
]
  return (
    <div className='flex justify-center bg-black  items-center flex-col '>
      {
        posts.map((post)=>(
            <Post key={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
        ))
      }
      
    </div>
  )
}

export default Posts
