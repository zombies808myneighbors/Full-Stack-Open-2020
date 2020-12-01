import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries/index'

const Books = (props) => {
  const [books, setBooks] = useState([])
  const result = useQuery(ALL_BOOKS, {
    pollInterval: 2000
  })

  useEffect(() => {
    if (result.data) {
      setBooks(result.data.allBooks)  
    }
  }, [result.data])
  
  if (!props.show) {
    return null
  }

  if (result.loading) {
    return (
      <div>
        loading...
      </div>
    )
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th>
              title
            </th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {books.map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Books