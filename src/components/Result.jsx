import React from 'react'

const Result = ({ result, number }) => {

  if (result == "NaN" || Math.sign(number) == -1) {
    return (
      <h1>Type a valid number</h1>
    )
  } else {
    return (
      <div className='result'>
        <h1>The result is:</h1>
        <h2>{result}</h2>
      </div>
    )
  }

}

export default Result