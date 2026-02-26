import { describe, expect, test }  from 'vitest';
import { add, subtract, multiply} from './math.helper';

describe('add', () => {
    test('Should add two positives numbers', () => {
        
    //! 1. Arrange 
    const a = 1;
    const b = 2;  

    //! 2. Act  
    const result = add(a, b);

    //! 3. Assert 
    expect(result).toBe(a + b)
    });
});


describe('sustract', () => {
    test('Should substract two positives numbers', () => {

    //! 1. Arrange 
    const a = 2;
    const b = 1
    //! 2. Act
    const result = subtract(a, b);
    //! 3. Assert
    expect(result).toBe(a - b)
    });

    test('Should substract two negative numbers', () => {

    //! 1. Arrange 
    const a = -2;
    const b = -1
    //! 2. Act
    const result = subtract(a, b);
    //! 3. Assert
    expect(result).toBe(a - b)
    });
}); 


describe('multiply', () => {
    test('Should multiply two numbers', () => {
    //! 1. Arrange 
    const a = 2;
    const b = 1
    //! 2. Act
    const result = multiply(a, b);
    //! 3. Assert
    expect(result).toBe(a * b)
    });

    test('Should multiply two negative numbers', () => {
    //! 1. Arrange 
    const a = -2;
    const b = -1
    //! 2. Act
    const result = multiply(a, b);
    //! 3. Assert
    expect(result).toBe(a * b)
    });
}); 