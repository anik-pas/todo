import packageJson from "../package.json";

const isDev = process.env.NODE_ENV === "development";

const getPathFromUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    return parsed.pathname; 
  } catch {
    return url;
  }
};

export const ghRoot = isDev ? "" : getPathFromUrl(packageJson.homepage);