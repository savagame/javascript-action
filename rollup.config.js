import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { builtinModules } from "module";

export default {
  input: "src/index.js",
  output: {
    esModule: true,
    file: "dist/index.js",
    format: "es",
    banner: "#!/usr/bin/env node",
  },
  external: [
    ...builtinModules, // don't bundle Node core modules (like fs, path, etc.)
    "@actions/core",
    "@actions/github",
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    commonjs({
      ignoreTryCatch: false, // fixes the null 'moduleSideEffects' crash
    }),
  ],
  onwarn(warning, warn) {
    // ignore harmless circular dependencies from actions libs
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
