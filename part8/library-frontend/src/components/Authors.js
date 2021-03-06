  
import React from 'react'
import { useQuery } from '@apollo/client'
import { FETCH_ALL_AUTHORS } from '../graphql/queries'
import UpdateAuthorBornForm from './UpdateAuthorBornForm'

const Authors = (props) => {
  const { loading, error, data } = useQuery(FETCH_ALL_AUTHORS)

  if (!props.show) {
    return null
  }

  if (loading) return (<div>loading...</div>)
  if (error || !data) return (<div>ERROR</div>)

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      {props.token && <UpdateAuthorBornForm allAuthors={data.allAuthors} />}
    </div>
  )
}

export default Authors
