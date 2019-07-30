<a name="PleasureArgsParser"></a>

## PleasureArgsParser([args]) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - The parsed args in object style  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [args] | <code>Array.&lt;String&gt;</code> | <code>process.argv</code> | Arguments |

**Example** *(Retrieving cli args)*  

```js
const PleasureArgsParser = require('pleasure-args-parser')
const args = PleasureArgsParser(['--sandy=papo', '-papo', '--api', '--name', 'martin'])
console.log(typeof args === 'object') // true
console.log(args.sandy === 'papo') // true
console.log(args.api) // true
console.log(args.papo) // true
console.log(args.name === 'martin') // true
console.log(Object.keys(args).length === 4) // true
```

* * *

&copy; 2019 Martin Rafael <tin@devtin.io>
