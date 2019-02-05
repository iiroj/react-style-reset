# react-style-reset

[![version](https://img.shields.io/npm/v/react-style-reset.svg)](https://www.npmjs.com/package/react-style-reset)
[![code size](https://img.shields.io/github/languages/code-size/iiroj/react-style-reset.svg)](https://github.com/iiroj/react-style-reset)
[![dependencies](https://img.shields.io/david/iiroj/react-style-reset.svg)](https://github.com/iiroj/react-style-reset/blob/master/package.json)
[![devDependencies](https://img.shields.io/david/dev/iiroj/react-style-reset.svg)](https://github.com/iiroj/react-style-reset/blob/master/package.json)

An object-style CSS Reset for React.

## Features

This module includes [Eric Meyer's Reset CSS 2.0](https://meyerweb.com/eric/tools/css/reset/) written as "object styles", to be easily used with [styled-component](https://www.styled-components.com/) and [emotion](https://emotion.sh/). Also included is a template literal version.

Also included is the popular [Normalize.css](https://necolas.github.io/normalize.css/), a modern HTML5-ready alternative to CSS resets, in both object and template literal versions.

## Usage

## Reset.css

With object styles:

```js
import reset from 'react-style-reset';
import { injectGlobal } from 'emotion';

injectGlobal(reset, {
  ...
});
```

With template literal styles:

```js
import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset};

  ...
`;
```

## Normalize.css

With object styles:

```js
import { normalize } from 'react-style-reset';
import { injectGlobal } from 'emotion';

injectGlobal(normalize, {
  ...
});
```

With template literal styles:

```js
import { normalize } from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  ...
`;
```

## Credits

Eric Meyer http://meyerweb.com/eric/tools/css/reset/
License: none (public domain)

normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css

## License

MIT — see [LICENCE](LICENSE)
