module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/coverage/**'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
};
