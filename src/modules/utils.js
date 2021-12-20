/**
 * Utility functions that are used in other files but not called in the main index.
 */

/**
 * Check if we're on the Irish site.
 */
function isIrishSite() {
  // Get the current URL.
  const url = window.location.href;

  // The regex pattern.
  const regex = /https?:\/\/((www\.)|(test\.))?flemingmedical\.ie/i;

  // Return true if we're on the Irish site, otherwise return false.
  return regex.test(url) ? true : false;
}

/**
 * Check if the customer is logged in.
 */
function isCstLoggedIn() {
  // Initialise the status.
  let isLoggedIn = true;

  // Cycle through the top links section.
  let topLinks = document.querySelectorAll('.top-action > a');
  for (let i = 0; i < topLinks.length; i += 1) {
    // Get the href of the link.
    let href = topLinks[i].getAttribute('href');
    
    // If the customer isn't logged in, one of the top links should contain the login URL. If we find this, update the status.
    if (href.includes('profile/login')) isLoggedIn = false;
  }

  // Return the status.
  return isLoggedIn;
}

export { isIrishSite, isCstLoggedIn };
