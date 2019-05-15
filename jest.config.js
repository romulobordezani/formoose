module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    `<rootDir>/src/**/{test,__tests__}/**/*.{ts,tsx}`,
    `<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}`
  ],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {},
  globals: {
    WebApp: true
  }
};
