# Array to Hash Conversion NPM Package

This is a module used to quickly and easily convert an array or arrays into a hash map. It supports uneven array lengths and incremental values.

## Installation
- Install the package
`yarn add array-hash-conversion`

- Require the package
`const arrayHashConversion = require('array-hash-conversion)`

## Usage
The function takes one argument and has two overloads.
`arrayhashConversion(keyArray, valueArray, incStart = 0)`
`keyArray` represents the array that will become the object keys and must not be null.
`valueArray` represents the array that will become the values and should be set to null if defining `incStart`.
`incStart` is the starting incrementing value that will become the value of all keys.

If `valueArray` is less than `keyArray`, the values will be repeated once the length of `keyArray` is exceeded.

If only `keyArray` is supplied, values will be incremented starting at 0.

If both `valueArray` and `valueArray` are given, `incStart` will be ignored.

## Examples
`arrayHashConversion(['Name', 'Age', 'Location'], ['John Doe', 27, 'USA'])` returns `{ Name: 'John Doe', Age: 27 }`

`arrayHashConversion(['Answer1', 'Answer2', 'Answer3', 'Answer4'], ['A', 'B'])` returns `{ Answer1: 'A', Answer2: 'B', Answer3: 'A', Answer4: 'B' }`

`arrayHashConversion(['Key1', 'Key2', 'Key3'])` returns `{ Key1: 0, Key2: 1, Key3: 2 }`

`arrayHashConversion(['Key1', 'Key2', 'Key3'], null, 1)` returns `{ Key1: 1, Key2: 2, Key3: 3 }`

## Bugs and Feature Requests
Please use the Issues to provide any bug reports and array/object-related feature requests.