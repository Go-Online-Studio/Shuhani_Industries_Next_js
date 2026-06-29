export function withBasePath(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = baseUrl || basePath || "";
  const ASSET_VERSION = "1.0.0"; // Increment this when updating static assets in /public

  if (!path) {
    return prefix || "/";
  }

  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  let fullPath = normalizedPath;
  if (prefix) {
    if (baseUrl && normalizedPath.startsWith(baseUrl)) {
      fullPath = normalizedPath;
    } else if (basePath && normalizedPath.startsWith(basePath)) {
      // If it has basePath but we want to use baseUrl
      if (baseUrl) {
        fullPath = baseUrl + normalizedPath.substring(basePath.length);
      } else {
        fullPath = normalizedPath;
      }
    } else {
      fullPath = `${prefix}${normalizedPath}`;
    }
  }

  // Check if it's a static asset file (ends with a common extension)
  const pathWithoutQuery = fullPath.split(/[?#]/)[0];
  const isAsset = /\.(png|jpe?g|gif|webp|svg|woff2?|ttf|otf|ico|css|js)$/i.test(pathWithoutQuery);

  if (isAsset && !fullPath.includes("v=")) {
    const separator = fullPath.includes("?") ? "&" : "?";
    return `${fullPath}${separator}v=${ASSET_VERSION}`;
  }

  return fullPath;
}
