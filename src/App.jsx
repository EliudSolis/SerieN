import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Form from './components/Form'
import Result from './components/Result'



function App() {
  const [number, setNumber] = useState()
  const [result, setResult] = useState()



  return (
    <div className="App">
      <Form setNumber={setNumber} />
      <Calculator setResult={setResult} n={number} />
      {
        number !== undefined ? <Result number={number} result={result} /> : <h1>Waiting for data</h1>
      }

    </div>
  )
}

export default App
