test("One euro should be 1.2 dollars", function(){
    const { EURToUSD } = require('./app.js')

    const result = EURToUSD(3.5)
    const expected = 3.5 * 1.2; 
    
    expect(result).toBe(expected);
})

test("One euro should be 127.9 JPY", () => {
    const { EURToJPY } = require('./app.js')

    const result = EURToJPY(3.5)
    const expected = 3.5 * 127.9; 
    
    expect(result).toBe(expected);
})

test("One euro should be 0.8 GBP", () => {
    const { EURToGBP } = require('./app.js')

    const result = EURToGBP(3.5)
    const expected = 3.5 * 0.8; 
    
    expect(result).toBe(expected);
})
