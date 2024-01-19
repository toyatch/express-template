module.exports = {
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  testRegex: ".+\\.test\\.[jt]sx?$",
  coveragePathIgnorePatterns: ["src/__tests__/.*", ".+\\.test.ts"],
};
