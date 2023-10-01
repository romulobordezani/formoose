import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import { visualizer } from 'rollup-plugin-visualizer';

import pkg from './package.json';

const name = 'index';
const options = [
  {
    name,
    format: 'cjs',
    input: pkg.source
  },
  {
    name,
    format: 'esm',
    input: pkg.source
  },
  {
    name,
    format: 'umd',
    input: pkg.source
  }
];

function createRollupConfig(options, callback) {
  const name = options.name;
  // A file with the extension ".mjs" will always be treated as ESM, even when pkg.type is "commonjs" (the default)
  // https://nodejs.org/docs/latest/api/packages.html#packages_determining_module_system
  const extName = options.format === 'esm' ? 'mjs' : 'js';
  const outputName = 'dist/' + [name, options.format, extName].join('.');

  const config = {
    input: options.input,
    output: {
      file: outputName,
      format: options.format,
      name: 'ReactHookForm',
      sourcemap: true,
      globals: { react: 'React' },
      exports: 'named'
    },
    plugins: [
      external(),
      typescript({
        tsconfig: options.tsconfig,
        clean: true,
        exclude: ['**/__tests__', '**/*.spec.ts']
      }),
      options.format === 'umd' &&
        commonjs({
          include: /\/node_modules\//
        }),
      sourcemaps(),
      options.format !== 'esm' &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true
          }
        }),
      visualizer({
        filename: 'bundle-analysis.html',
        open: false
      })
    ].filter(Boolean)
  };

  return callback ? callback(config) : config;
}

export default options.map((option) => createRollupConfig(option));
