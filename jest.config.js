module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setup-jest.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
    },
  },
};
