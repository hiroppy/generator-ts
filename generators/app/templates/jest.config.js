module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!src/types/*.d.ts'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testMatch: ['**/src/**/*.test.(ts|tsx)?(x)'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
};
