import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  typescript({ typescript: require("typescript") }),
  production && terser(),
];

const umdPlugins = [...plugins, resolve(), commonjs()];

export default [
  {
    input: "index.ts",
    output: [
      {
        exports: "named",
        file: pkg.main,
        format: "cjs",
      },
      {
        exports: "named",
        file: pkg.module,
        format: "esm",
      },
    ],
    plugins,
  },
  {
    input: "string.ts",
    output: [
      {
        exports: "named",
        file: "string.js",
        format: "cjs",
      },
      {
        exports: "named",
        file: "string.mjs",
        format: "esm",
      },
    ],
    plugins,
  },
  {
    input: "index.ts",
    output: {
      exports: "named",
      file: pkg.browser,
      format: "umd",
      name: "reactStyleReset",
    },
    plugins: umdPlugins,
  },
  {
    input: "string.ts",
    output: {
      exports: "named",
      file: "string.umd.js",
      format: "umd",
      name: "reactStyleReset",
    },
    plugins: umdPlugins,
  },
];
