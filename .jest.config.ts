import type {Config} from 'jest';

const jestConfig: Config = {
  rootDir: ".",
  moduleDirectories: ["node_modules", "<rootDir>"],
  roots: ["<rootDir>/src", "<rootDir>/test"],
};

module.exports = jestConfig;