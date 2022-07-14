import React from 'react'

const Posts = ({ posts = [], loading }) => {
  if (loading) {
    console.log("loading...");
    return <h1>Loading...</h1>
  }
  return (<>
    {
      posts.map((post) => {
        return <div style={{ height: '100px', width: '40%', margin: '10px  auto', padding: 'auto', border: '2px solid red' }} >
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{height:'100px',width:'100px',objectFit:'contain'}}>
              <img src={post.image} style={{height:'100%',width:'100%'}} />

            </div>
            <div style={{ display: 'flex',width:'100%', flexDirection: 'column', gap: 'auto', justifyContent: 'center', alignItems: 'center', fontSize: '1rem' }}>
              <span>{post.first_name}</span>
              <span>{post.email}</span>
              <span>{post.id}</span>
            </div>
          </div>


        </div>
      })

    }
  </>
  )
}

export default Posts;