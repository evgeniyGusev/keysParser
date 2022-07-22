# keysParser
### Get the value in an object using a string.

[![npm](https://badgen.net/npm/v/keys-parser)](https://www.npmjs.com/package/keys-parser)
[![npm](https://badgen.net/npm/dw/keys-parser)](https://www.npmjs.com/package/keys-parser)
[![npm](https://badgen.net/npm/license/keys-parser)](https://www.npmjs.com/package/keys-parser)

The string `'person.info.name'` will return you `'Pete'` from the `{ person: { info: { name: 'Pete', age: 32 } } }`

#### Syntax
```javascript
keysParser(string, object)
```
#### Params
`string`[require] - a string with the route to the desired key in the Object

`object`[require] - the object to find the key in

#### Examples
```javascript
import { keysParser } from 'keys-parser'

const string = 'big.red.fruit'
const object = {
  big: {
    red: {
      fruit: 'Apple',
      car: 'Chevrolet'
    }
  }
}

keysParser(string, object) //--> 'Apple'

keysParser('big.red.fruit.banana', object) //--> console error:
//--> "keysParser ERROR: The key "banana" can't be found in the "fruit", because "fruit's" value is simple type"

keysParser('big.red.apple', object) //--> console error:
//--> "keysParser ERROR: The key "apple" can't be found...  Maybe you meant something like these: "fruit,car""
```