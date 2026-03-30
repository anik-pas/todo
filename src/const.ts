import packageJson from "../package.json";

const isDev = process.env.NODE_ENV === "development";

export const ghRoot = isDev ? "" : packageJson.homepage;