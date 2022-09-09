import React, { useEffect } from 'react'
import {  calculator } from "../test/functions";



const Calculator = ({n, setResult}) => {
    
    useEffect(() => {
        
        setResult(calculator(n))
      
  
    }, [n])

  return (
    <div></div>
  )
}

export default Calculator
