# fire

Execute any logic inside a promise-like function


## Installation

    $ npm install @jgjp/fire

## API

```typescript
import fire from '@jgjp/fire';

const { data } = await fire(async () => {
  // do something
})
  .catch(handleError)
  .finally(cleanup)

// use data
```

## License

  MIT
