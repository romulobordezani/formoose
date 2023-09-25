import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: JestConfigWithTsJest = {
  modulePaths: [compilerOptions.baseUrl],
  preset: 'ts-jest',
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  globals: {
    WebApp: true
  },
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  modulePathIgnorePatterns: ["<rootDir>/dist/"]
};

export default config;