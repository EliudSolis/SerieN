import React from "react";
import { nthFibonacciFactor, nthPrimeFactor, nthTriangularFactor, calculator } from "./functions";
import { describe, expect } from 'vitest'

describe(" Testing nthFibonacci", ()=>{
    test('Testing number 0', () => { 
        expect(nthFibonacciFactor(0)).toBe(0)
     })
    test('Testing number 1', () => { 
        expect(nthFibonacciFactor(1)).toBe(1)
     })
    test('Testing number 2', () => { 
        expect(nthFibonacciFactor(2)).toBe(1)
     })
    test('Testing number 3', () => { 
        expect(nthFibonacciFactor(3)).toBe(2)
     })
    test('Testing number 4', () => { 
        expect(nthFibonacciFactor(4)).toBe(3)
     })
    test('Testing number 5', () => { 
        expect(nthFibonacciFactor(5)).toBe(5)
     })
    test('Testing number 6', () => { 
        expect(nthFibonacciFactor(6)).toBe(8)
     })
    test('Testing number 7', () => { 
        expect(nthFibonacciFactor(7)).toBe(13)
     })
    test('Testing number 8', () => { 
        expect(nthFibonacciFactor(8)).toBe(21)
     })
     test('Testing number 9', () => { 
         expect(nthFibonacciFactor(9)).toBe(34)
      })
})

describe(" Testing nthPrimeFactor", ()=>{
    test('Testing number 0', () => { 
        expect(nthPrimeFactor(0)).toBe(1)
     })
    test('Testing number 1', () => { 
        expect(nthPrimeFactor(1)).toBe(2)
     })
    test('Testing number 2', () => { 
        expect(nthPrimeFactor(2)).toBe(3)
     })
    test('Testing number 3', () => { 
        expect(nthPrimeFactor(3)).toBe(5)
     })
    test('Testing number 4', () => { 
        expect(nthPrimeFactor(4)).toBe(7)
     })
    test('Testing number 5', () => { 
        expect(nthPrimeFactor(5)).toBe(11)
     })
    test('Testing number 6', () => { 
        expect(nthPrimeFactor(6)).toBe(13)
     })
    test('Testing number 7', () => { 
        expect(nthPrimeFactor(7)).toBe(17)
     })
    test('Testing number 8', () => { 
        expect(nthPrimeFactor(8)).toBe(19)
     })
     test('Testing number 9', () => { 
         expect(nthPrimeFactor(9)).toBe(23)
      })
})
describe(" Testing nthTriangularFactor", ()=>{
    test('Testing number 0', () => { 
        expect(nthTriangularFactor(0)).toBe(1)
     })
    test('Testing number 1', () => { 
        expect(nthTriangularFactor(1)).toBe(1)
     })
    test('Testing number 2', () => { 
        expect(nthTriangularFactor(2)).toBe(3)
     })
    test('Testing number 3', () => { 
        expect(nthTriangularFactor(3)).toBe(6)
     })
    test('Testing number 4', () => { 
        expect(nthTriangularFactor(4)).toBe(10)
     })
    test('Testing number 5', () => { 
        expect(nthTriangularFactor(5)).toBe(15)
     })
    test('Testing number 6', () => { 
        expect(nthTriangularFactor(6)).toBe(21)
     })
    test('Testing number 7', () => { 
        expect(nthTriangularFactor(7)).toBe(28)
     })
    test('Testing number 8', () => { 
        expect(nthTriangularFactor(8)).toBe(36)
     })
     test('Testing number 9', () => { 
         expect(nthTriangularFactor(9)).toBe(45)
      })
})
describe(" Testing function calculator", ()=>{
    test('Testing number 0', () => { 
        expect(calculator(0)).toBe(3)
     })
    test('Testing number 1', () => { 
        expect(calculator(1)).toBe(4)
     })
    test('Testing number 2', () => { 
        expect(calculator(2)).toBe(12)
     })
    test('Testing number 3', () => { 
        expect(calculator(3)).toBe(27)
     })
    test('Testing number 4', () => { 
        expect(calculator(4)).toBe(45)
     })
    test('Testing number 5', () => { 
        expect(calculator(5)).toBe(72)
     })
    test('Testing number 6', () => { 
        expect(calculator(6)).toBe(104)
     })
    test('Testing number 7', () => { 
        expect(calculator(7)).toBe(147)
     })
    test('Testing number 8', () => { 
        expect(calculator(8)).toBe(199)
     })
     test('Testing number 9', () => { 
         expect(calculator(9)).toBe(264)
      })
})



