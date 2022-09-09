import React, { useEffect } from 'react'
import {  calculator } from "../test/functions";



const Calculator = ({n, setResult}) => {

    // const nthTriangularFactor = n => {
    //   if(n == 0){
    //     n =1
    //   }

    //  return n * (n + 1) / 2
    // }

    // const nthFibonacciFactor = n => {
    //   let first = 1
    //   let last = 0
    //   let index = 0
    //   while(index < n) {
    //     const pivot = last
    //     last += first
    //     first = pivot
    //     index++
    //   }
    //   return last
    // }

   
  
    // const nthPrimeFactor = n => {
    //   let index = 0
    //   let element = 1
    //   while (index < n) {
    //     element++
    //     let isPrime = true
    //     for(let div = 2; div <= Math.sqrt(element); div++) {
    //       if (element % div === 0) {
    //         isPrime = false
    //       }
    //     }
    //     if (isPrime) {
    //       index++
    //     }
    //   }
    //   return element
    // }
  

  
    
    useEffect(() => {
    
        // const resultTriangular = 5 * nthTriangularFactor(n)
        // const resultFibo = 2 * nthFibonacciFactor(n)
        // const resultPrime = nthPrimeFactor(n + 1)
       
    
        setResult(calculator(n))
      
  
    }, [n])

  return (
    <div></div>
  )
}

export default Calculator
