export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const ASSET_VERSION = "1.0.0"; // Increment this when updating static assets in /public

  if (!path) {
    return basePath || "/";
  }

  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const hasBasePath = basePath && (normalizedPath.startsWith(basePath + "/") || normalizedPath === basePath);
  const fullPath = hasBasePath ? normalizedPath : `${basePath}${normalizedPath}`;

  // Check if it's a static asset file (ends with a common extension)
  const pathWithoutQuery = fullPath.split(/[?#]/)[0];
  const isAsset = /\.(png|jpe?g|gif|webp|svg|woff2?|ttf|otf|ico|css|js)$/i.test(pathWithoutQuery);

  if (isAsset && !fullPath.includes("v=")) {
    const separator = fullPath.includes("?") ? "&" : "?";
    return `${fullPath}${separator}v=${ASSET_VERSION}`;
  }

  return fullPath;
}
