/**
 * A function using regex to test if we're on the Irish site.
 */
export default function isIrishSite() {
  // Get the current URL.
  const url = window.location.href;

  // The regex pattern.
  const regex = /https?:\/\/((www\.)|(test\.))?flemingmedical\.ie/i;

  // Return true if we're on the Irish site, otherwise return false.
  if (regex.test(url)) {
    return true;
  } else {
    return false;
  }
}
