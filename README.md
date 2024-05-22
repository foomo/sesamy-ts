# Sesamy Packages

[![Build Status](https://github.com/foomo/sesamy-ts/actions/workflows/test.yml/badge.svg?branch=main&event=push)](https://github.com/foomo/sesamy-ts/actions/workflows/test.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/foomo/sesamy-ts)](https://goreportcard.com/report/github.com/foomo/sesamy-ts)

> **Se**rver **S**ide T**a**g **M**anagement **S**ystem

This library offers a wrapper around `gtag` to be used with generated events from `foomo/sesamy-cli`.

## Usage

Load `gtm.js` and setup `gtag()`:

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

## How to Contribute

Make a pull request...

This repo uses [Changeset](https://github.com/changesets/changesets/blob/main/packages/cli/README.md), so please run this on your PR and follow the instructions:

```bash
$ pnpm changeset
```

## License

Distributed under MIT License, please see license file within the code for more details.
