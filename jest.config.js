export default {
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
