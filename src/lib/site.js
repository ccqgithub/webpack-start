const {
  locale,
  isUrlWithLocale
} = pageConfig;

export function getBaseUrl() {
  return isUrlWithLocale ? `/${locale}/` : '/';
}

export function getUrl(path) {
  let baseUrl = getBaseUrl();
  if (!path) return baseUrl;
  return baseUrl + path.replace(/^\//, '');
}

export function getApiBase() {
  return `/${locale}/api/`;
}
