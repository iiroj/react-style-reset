import commonjs from "rollup-plugin-commonjs";
import minify from "rollup-plugin-babel-minify";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  typescript({ typescript: require("typescript") }),
  production && minify({ comments: false })
];

const umdPlugins = [...plugins, resolve(), commonjs()];

export default [
  {
    input: "index.ts",
    output: [
      {
        exports: "named",
        file: pkg.main,
        format: "cjs"
      },
      {
        exports: "named",
        file: pkg.module,
        format: "es"
      }
    ],
    plugins
  },
  {
    input: "string.ts",
    output: [
      {
        exports: "named",
        file: "string.js",
        format: "cjs"
      },
      {
        exports: "named",
        file: "string.esm.js",
        format: "es"
      }
    ],
    plugins
  },
  {
    input: "index.ts",
    output: {
      exports: "named",
      file: pkg.browser,
      format: "umd",
      name: "reactStyleReset"
    },
    plugins: umdPlugins
  },
  {
    input: "string.ts",
    output: {
      exports: "named",
      file: "string.umd.js",
      format: "umd",
      name: "reactStyleReset"
    },
    plugins: umdPlugins
  }
];
