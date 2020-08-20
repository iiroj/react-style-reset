/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

const monospace = {
  fontFamily: "monospace, monospace",
  fontSize: "1em",
};

const input = {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: "1.15",
  margin: "0",
};

const button = {
  WebkitAppearance: "button",
  "&::-moz-focus-inner": {
    borderStyle: "none",
    padding: "0",
  },
  "&:-moz-focusring": {
    outline: "1px dotted ButtonText",
  },
};

const checkbox = {
  boxSizing: "border-box",
  padding: "0",
};

const normalize = {
  html: {
    lineHeight: "1.15",
    WebkitTextSizeAdjust: "100%",
  },

  body: {
    margin: "0",
  },

  h1: {
    fontSize: "2em",
    margin: "0.67em 0",
  },

  hr: {
    boxSizing: "content-box",
    height: "0",
    overflow: "visible",
  },

  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em",
  },

  a: {
    backgroundColor: "transparent",
  },

  "abbr[title]": {
    borderBottom: "none",
    // textDecoration: 'underline',
    textDecoration: "underline dotted",
  },

  strong: {
    fontWeight: "bolder",
  },
  b: {
    fontWeight: "bolder",
  },

  code: monospace,
  kbd: monospace,
  sam: monospace,

  small: {
    fontSize: "80%",
  },

  sub: {
    bottom: "-0.25em",
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    verticalAlign: "baseline",
  },

  sup: {
    fontSize: "75%",
    lineHeight: "0",
    position: "relative",
    top: "-0.5em",
    verticalAlign: "baseline",
  },

  img: {
    borderStyle: "none",
  },

  button: {
    ...input,
    ...button,
    overflow: "visible",
    textTransform: "none",
    WebkitAppearance: "button",
  },
  input: { ...input, overflow: "visible" },
  optgroup: input,
  select: { ...input, textTransform: "none" },
  textare: input,

  '[type="button"]': button,
  '[type="reset"]': button,
  '[type="submit"]': button,

  fieldset: {
    padding: "0.35em 0.75em 0.625em",
  },

  legend: {
    boxSizing: "border-box",
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    padding: "0",
    whiteSpace: "normal",
  },

  progress: {
    verticalAlign: "baseline",
  },

  textarea: {
    overflow: "auto",
  },

  '[type="checkbox"]': checkbox,
  '[type="radio"]': checkbox,

  '[type="number"]::-webkit-inner-spin-button': {
    height: "auto",
  },
  '[type="number"]::-webkit-outer-spin-button': {
    height: "auto",
  },

  '[type="search"]': {
    WebkitAppearance: "textfield",
    outlineOffset: "-2px",
  },

  '[type="search"]::-webkit-search-decoration': {
    WebkitAppearance: '""',
  },

  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit",
  },

  details: {
    display: "block",
  },

  summary: {
    display: "list-item",
  },

  template: {
    display: "none",
  },

  "[hidden]": {
    display: "none",
  },
};

export default normalize;
