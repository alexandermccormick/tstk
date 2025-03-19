# @tstk/decorators

A collection of utility decorators for adding commonly desired behaviors to classes.

##### Singleton

```typescript
import { Singleton } from "@tstk/decorators"         
                                                     
@Singleton                                           
class Example {}                                     
                                                     
const instance1 = new Example()                      
const instance2 = new Example()                      
console.log(instance1 === instance2) // prints `true`
```
