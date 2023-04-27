export function cleanUrl(url: Readonly<string>): string {
  // Remove "http://" or "https://"
  let cleanedUrl = url.replace(/^https?:\/\//i, '')

  // Remove www. prefix
  cleanedUrl = cleanedUrl.replace(/^www\./i, '')

  // Remove any path or query parameters
  cleanedUrl = cleanedUrl.split(/[?#]/)[0]

  // Remove any trailing slash
  cleanedUrl = cleanedUrl.replace(/\/$/, '')

  // Return cleaned URL
  return cleanedUrl
}
