export default {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    coveragePathIgnorePatterns: ['<rootDir>/src/env.ts', '<rootDir>/src/main.ts']
}
