# next-number [![Build Status](https://travis-ci.org/gillstrom/next-number.svg?branch=master)](https://travis-ci.org/gillstrom/next-number)

> Get consecutively numbers calculated with a chosen function.


## Install

```
$ npm install --save next-number
```


## Usage

```js
const nextNumber = require('next-number');
const next = nextNumber(50, a => a + 1);

console.log(next(), next(), next(), next());
//=> 51 52 53 54
```


## API

### nextNumber(input, function)

Returns a function that when called will return the next number calculated with the provided function.

#### input

*Required*  
Type: `number`

Number to start from.

#### function

*Required*  
Type: `function`

Function to calculate the next number with.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
