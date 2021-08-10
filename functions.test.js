const {expect, test, describe} = require("@jest/globals")
const { add, subtract, multiply, divide, sayHello } = require("./functions")

test('Hello World test', function() {
    expect(1).toBe(1)
})

test("add func adds two nums", function() {
    expect(add(2, 5)).toBe(7)
})

test("sub func subtracts two nums", function() {
    expect(subtract(4,1)).not.toBeNaN()
})

test("div func divides two nums", function() {
    expect(divide(10,2)).toBe(5)
})

test("multi func multiplies two nums", function() {
    expect(multiply(5,5)).toBe(25)
})

test('arrays are special', function() {
    expect([1, 2]).toEqual([1,2])
})

describe('Math Operations', function() {
    test("add func adds two nums", function() {
        expect(add(2, 5)).toBe(7)
    })
    
    test("sub func subtracts two nums", function() {
        expect(subtract(4,1)).not.toBeNaN()
    })
    
    test("div func divides two nums", function() {
        expect(divide(10,2)).toBe(5)
    })
    
    test("multi func multiplies two nums", function() {
        expect(multiply(5,5)).toBe(25)
    })
})

describe('sayHello Tests', function() {
    test('returns string of Hello', function() {
        expect(sayHello()).toBe('Hello')
    })
})
