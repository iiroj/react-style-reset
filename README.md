<div align="center">
  <h1 align="center">react-style-reset</h1>
  <p>An object-style CSS Reset for React.</p>
  <a href="https://www.npmjs.com/package/react-style-reset"><strong>npm</strong></a> ·
  <a href="https://gitlab.com/iiroj/react-style-reset"><strong>GitLab</strong></a>
  <br/>
  <br/>
  <a href="https://www.npmjs.com/package/react-style-reset">
    <img src="https://img.shields.io/npm/v/react-style-reset.svg">
  </a>
  <a href="https://gitlab.com/iiroj/react-style-reset">
    <img src="https://img.shields.io/github/languages/code-size/iiroj/react-style-reset.svg">
  </a>
  <a href="https://gitlab.com/iiroj/react-style-reset/blob/master/package.json">
    <img src="https://img.shields.io/david/iiroj/react-style-reset.svg">
  </a>
  <a href="https://gitlab.com/iiroj/react-style-reset/blob/master/package.json">
    <img src="https://img.shields.io/david/dev/iiroj/react-style-reset.svg">
  </a>
  <br/>
  <br/>
</div>

## Features

This module includes Eric Meyer's Reset CSS 2.0 written as "object styles", to be easily used with [styled-component](https://www.styled-components.com/) and [emotion](https://emotion.sh/). Also included is a template literal version.

## Usage

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

## Credits

Eric Meyer http://meyerweb.com/eric/tools/css/reset/
License: none (public domain)

Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
