# @foomo/sesamy

>**Se**rver **S**ide T**a**g **M**anagement **S**ystem


## Usage

Load `gtm.js` and setup `window.gtag()`:

```tsx
import { GTMScript } from '@foomo/sesamy';

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
    <head>
      <GTMScript id={'GTM-XXXXXXX'} />
    </head>
    <body>
    <main>{children}</main>
    </body>
    </html>
  );
}
```

Send event:

```tsx
import { collect } from '@foomo/sesamy';

export const MyComponent = () => {
  const handleClick = () => {
    collect({
      name: 'my-event',
      params: {
        value: 'my-value'
      }
    })
  }
  return (<button onClick={handleClick}>Click</button>)
}
```

### Code generation

If you're using Go, checkout [foomo/sesamy-cli](https://github.com/foomo/sesaym-cli) to generate events
to keep your backend, frontend and Google Tag Manager in sync.

## How to Contribute

This repo uses [Changeset](https://github.com/changesets/changesets/blob/main/packages/cli/README.md), so please run this on your PR and follow the instructions:

```bash
$ pnpm changeset
```

## License

Distributed under MIT License, please see license file within the code for more details.
