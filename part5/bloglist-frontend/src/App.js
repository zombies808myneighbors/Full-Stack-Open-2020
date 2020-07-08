import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      
      setUser(user)
      setUsername('')
      setPassword('')
    }
    catch (exception) {
      console.log('invalid creds, chummer')
    }
  }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
  if (!user) {
    return (
      <div>
        <h2>login</h2>
        <form onSubmit={handleLogin}>
          <div>
            username: 
            <input 
              type="text"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)} />
          </div>
          <div>
            password: 
            <input 
              type="text"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)} />
          </div>

          <button type="submit">login</button>
        </form>
      </div>
    )
  }
  else {
    return (
      <div>
        <h2>blogs</h2>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )
  }  
}

export default App