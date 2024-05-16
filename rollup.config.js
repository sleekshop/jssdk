import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "default",
      sourcemap: true,
      banner: "/* Sleekshop */",
      footer: "/* sleekshop.io */",
    },
    {
      file: pkg.module,
      format: "es",
      exports: "default",
      sourcemap: true,
      banner: "/* Sleekshop */",
      footer: "/* sleekshop.io */",
    },
  ],
  plugins: [
    json(),
    external(),
    resolve({ preferBuiltins: true, browser: true }),
    typescript({
      exclude: "**/__tests__/**",
      clean: true,
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
        ],
        "node_modules/react-dom/index.js": ["render"],
      },
    }),
  ],
  external: ["axios"],
};
