module.exports = {
  transform: {},
  testEnvironment: "jest-environment-jsdom",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  logHeapUsage: true,
  detectOpenHandles: true,
};
