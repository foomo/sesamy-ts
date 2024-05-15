# @foomo/sesamy

>**Se**rver **S**ide T**a**g **M**anagement **S**ystem

## Usage

Send GTag events:

```tsx
import {collect} from '@foomo/sesamy';

export const Button = () => {
  const handleClick = () => collect(
    {
      name: 'click',
      params: {id: 'checkout'}
    }
  )
  return (<button id={'checkout'} onClick={handleClick}>Click me</button>)
}
```

### Code generation

If you're using Go, checkout [foomo/sesamy-cli](https://github.com/foomo/sesaym-cli) to generate events
to keep your backend, frontend and Google Tag Manager in sync.

## How to Contribute

Make a pull request...

This repo uses [Changeset](https://github.com/changesets/changesets/blob/main/packages/cli/README.md), so please run this on your PR and follow the instructions:

```bash
$ pnpm changeset
```

## License

Distributed under MIT License, please see license file within the code for more details.
