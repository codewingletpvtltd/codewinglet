export function getStrapiURL(path = '') {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
}

export function getStrapiMediaFullURL(url: string) {
  if (!url) {
    return '';
  }
  if (url.startsWith('http') || url.startsWith('//')) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${getStrapiURL()}${url}`;
}
