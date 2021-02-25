import React, {useState, useEffect} from 'react'


const Services = () => {
    const [posts, setPosts] = useState([])

     const getPosts = async () => {
         const response = await fetch('https://jsonplaceholder.typicode.com/posts',)         
         setPosts(await response.json());
        }

     useEffect(() => {
            getPosts()
    }, [])

    return (
        <div>
         <h2 className='text-center my-5'>A List of hundred Dummy Posts</h2>
            <div className="container-fluid mt-5">
                <div className="card p-2">
                <div className="row text-center">
                   {posts.map ((curElem) => {
                    return (
                    <div className="col-10 col-md-4 mt-5">
                    <div key={curElem.id} className="text-dark">
                        <div>{curElem.id}</div>
                        <div>{curElem.title}</div>
                        <div>{curElem.body}</div>
                    </div>
                    </div>
                    )
               })}
            </div>
            </div>
         </div>
      </div>
    
    )
}

export default Services;
