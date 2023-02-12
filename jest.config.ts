import { Config } from '@jest/types';
import {compilerOptions} from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config.InitialOptions = {
  verbose: false,
  testEnvironment: 'node',
  preset: 'ts-jest',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  moduleNameMapper: 
   pathsToModuleNameMapper(compilerOptions.paths, { prefix: '/' }),
};

export default config;