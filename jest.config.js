/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        "^axios/lib/adapters/http$": "<rootDir>/__mocks__/axiosHttpAdapter.js",
        "^axios/lib/adapters/xhr$": "<rootDir>/__mocks__/axiosXhrAdapter.js"
    }
};
