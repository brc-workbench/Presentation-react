module.exports = {
    roots: [
        "<rootDir>/src/"
    ],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    // Setup Enzyme
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
}