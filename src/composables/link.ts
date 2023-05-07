export function externalRedirect(uri: string) {
  if (uri && uri.length && new URL(uri).hostname) {
    window.open(uri)?.focus()
  }
}
