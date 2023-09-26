import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

export default {
  input: [
    './src/index.ts',
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,  
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      exclude: [
        "src/**/{test,__tests__}/**/*.{ts,tsx}",
        "src/**/?(*.)(spec|test).{ts,tsx}"]
    }),
    postcss({
      plugins: []
    }),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: false,
    })
  ],
};