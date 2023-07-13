/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.ts?$': [
      'ts-jest'
    ],
  },
  "coverageDirectory": "./coverage",
  testEnvironment: 'node',
  resetMocks: true,
  clearMocks: true,
  preset: 'ts-jest/presets/default-esm',
};