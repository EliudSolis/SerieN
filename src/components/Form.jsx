import React from 'react'

const Form = ({setNumber}) => {

 

  const submit = e => {
    e.preventDefault()
    setNumber(Number(e.target.inputN.value))
  }

  return (
    <form  className='form' onSubmit={submit}>
      
      <h2>This application solves the following equation:</h2>
      <h3> serie(n) = 5triangular(n) + 2 Fibonacci(n) - prime(n+1)</h3>
      <input id="inputN" type="number" placeholder='Type a number' />
      <button>Get Result</button>
    </form>
  )
}

export default Form