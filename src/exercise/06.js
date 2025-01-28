// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null)
  const [error, setError] = useState(false)

  function handleChange(event) {
    const input = event.target.value
    setError(
      input === input.toLowerCase() ? null : 'Username must be lower case',
    )
  }

  function handleSubmit(event) {
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
