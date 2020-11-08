import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, likeBlog, removeBlog, createdByUser }) => {
  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    likeBlog: PropTypes.func.isRequired,
    removeBlog: PropTypes.func.isRequired,
    createdByUser: PropTypes.bool.isRequired
  }
  const [showDeets, setShowDeets] = useState(false)

  const showWhenVisible = { display: showDeets ? '' : 'none' }
  const showDeleteButton = { display: createdByUser ? '' : 'none' }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleShowDeets = () => {
    setShowDeets(!showDeets)
  }

  return (
    <div style={blogStyle}>
      {blog.title} by {blog.author}
      <button onClick={toggleShowDeets}>{showDeets ? 'hide' : 'show'} deets</button>
      <button onClick={removeBlog} style={showDeleteButton}>delete</button>
      <div style={showWhenVisible}>
        {blog.url} <br />
        {blog.likes} <button onClick={likeBlog}>like</button> <br />
        {blog.user.name} <br />
      </div>
    </div>  
  )  
}

export default Blog
