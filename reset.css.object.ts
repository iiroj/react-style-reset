// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 2.3

import * as CSS from "csstype";

type CSSBaseObject = CSS.PropertiesFallback<number | string>;
type CSSPseudoObject = { [K in CSS.Pseudos]?: CSSObject };
interface CSSOthersObject {
  [propertiesName: string]: Interpolation;
}
interface CSSObject extends CSSBaseObject, CSSPseudoObject, CSSOthersObject {}

interface ArrayInterpolation extends Array<Interpolation> {}

type Interpolation =
  | undefined
  | null
  | boolean
  | string
  | number
  | CSSObject
  | ArrayInterpolation;

// http://meyerweb.com/eric/tools/css/reset/
// v2.0 | 20110126
// License: none (public domain)

const generics: CSSObject = {
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline"
};

const displayBlock: CSSObject = {
  display: "block"
};

const listStyleNone: CSSObject = {
  listStyle: "none"
};

const contentNone: CSSObject = {
  content: "none"
};

const quotesNone: CSSObject = {
  quotes: "none"
};

const reset: Interpolation = {
  a: generics,
  abbr: generics,
  acronym: generics,
  address: generics,
  applet: generics,
  article: { ...generics, ...displayBlock },
  aside: { ...generics, ...displayBlock },
  audio: generics,
  b: generics,
  big: generics,
  blockquote: {
    ...generics,
    ...quotesNone,
    "&::after": contentNone,
    "&::before": contentNone
  },
  body: { ...generics, lineHeight: 1 },
  canvas: generics,
  caption: generics,
  center: generics,
  cite: generics,
  code: generics,
  dd: generics,
  del: generics,
  details: { ...generics, ...displayBlock },
  dfn: generics,
  div: generics,
  dl: generics,
  dt: generics,
  em: generics,
  embed: generics,
  fieldset: generics,
  figcaption: { ...generics, ...displayBlock },
  figure: { ...generics, ...displayBlock },
  footer: { ...generics, ...displayBlock },
  form: generics,
  h1: generics,
  h2: generics,
  h3: generics,
  h4: generics,
  h5: generics,
  h6: generics,
  header: { ...generics, ...displayBlock },
  hgroup: { ...generics, ...displayBlock },
  html: generics,
  i: generics,
  iframe: generics,
  img: generics,
  ins: generics,
  kbd: generics,
  label: generics,
  legend: generics,
  li: generics,
  mark: generics,
  menu: { ...generics, ...displayBlock },
  nav: { ...generics, ...displayBlock },
  object: generics,
  ol: { ...generics, ...listStyleNone },
  output: generics,
  p: generics,
  pre: generics,
  q: {
    ...generics,
    ...quotesNone,
    "&::after": contentNone,
    "&::before": contentNone
  },
  ruby: generics,
  s: generics,
  samp: generics,
  section: { ...generics, ...displayBlock },
  small: generics,
  span: generics,
  strike: generics,
  strong: generics,
  sub: generics,
  summary: generics,
  sup: generics,
  table: {
    ...generics,
    borderCollapse: "collapse",
    borderSpacing: 0
  },
  tbody: generics,
  td: generics,
  tfoot: generics,
  th: generics,
  thead: generics,
  time: generics,
  tr: generics,
  tt: generics,
  u: generics,
  ul: { ...generics, ...listStyleNone },
  var: generics,
  video: generics
};

export default reset;
