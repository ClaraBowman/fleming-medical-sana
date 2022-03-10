import { isIrishSite, isCstLoggedIn } from "./utils";
  
/**
 * Create Country Flag Links.
 */
function flagLinks() {

  // Create the containing div.
  let countryLink = document.createElement("div");
  countryLink.classList.add("top-dropdown", "language");

  // Only populate the path component of the url if there exists a rel alternate link to the UK site.
  let validPath = (document.querySelector('link[hreflang="en-GB"]')) ? window.location.pathname : '';

  // Conditionally populate the HTML.
  countryLink.innerHTML = `
    <div class="opener">
      <img class="flag" src="/content/files/images/languages/flag-${isIrishSite() ? 'ie' : 'uk'}.svg" alt="Fleming Medical ${isIrishSite() ? 'IE' : 'UK'}" >
    </div>
    <div class="summary">
      <a class="hyp selected" href="${validPath}">
        <img src="/content/files/images/languages/flag-${isIrishSite() ? 'ie' : 'uk'}.svg" alt="Fleming Medical ${isIrishSite() ? 'IE' : 'UK'}" class="flag">Fleming Medical ${isIrishSite() ? 'IE' : 'UK'}
      </a>
      <a href="https://www.flemingmedical.${isIrishSite() ? 'co.uk' : 'ie'}${validPath}" class="hyp">
        <img src="/content/files/images/languages/flag-${isIrishSite() ? 'uk' : 'ie'}.svg" alt="Fleming Medical ${isIrishSite() ? 'UK' : 'IE'}" class="flag">Fleming Medical ${isIrishSite() ? 'UK' : 'IE'}
      </a>
    </div>`;
  
  // Prepend it to the relevant containing element.
  let topAction = document.querySelector(".top-header .top-action");
  if (topAction) topAction.prepend(countryLink);
}

/**
 * Add a CSS class to distinguish the IE and UK sites.
 */
function addCountryClass() {
  if (isIrishSite()) {
    document.body.classList.add('ie-site');
  } else {
    document.body.classList.add('uk-site');
  }
}

/**
 * Update the create account links.
 */
function createAccountLinks() {  
  // Only create the links if the customer isn't already logged in.
  if (!isCstLoggedIn()) {
    // The desktop links section.
    let desktopLinks = document.querySelectorAll('.top-action');

    // The links section on mobile.
    let mobileLinks = document.querySelectorAll('.top-dropdown.login .summary');
    
    // Create the two links (they need to be distinct).
    let desktopLink = document.createElement('a');
    desktopLink.classList.add('top-hyp', 'font-smaller');
    desktopLink.innerText = 'Create Account';
    desktopLink.href = '/account-type';
    let mobileLink = document.createElement('a');
    mobileLink.classList.add('hyp');
    mobileLink.innerText = 'Create Account';
    mobileLink.href = '/account-type';

    // Append the links for desktop and mobile.
    desktopLinks[0].insertBefore(desktopLink, desktopLinks[0].childNodes[2]);
    mobileLinks[0].insertBefore(mobileLink, mobileLinks[0].childNodes[1]);
  }

  // Override the sign-up link on the UK login page.
  if (!isIrishSite() && document.getElementById('loginPage')) {
    let accBtn = document.querySelector('[title="Create account"]');
    if (accBtn) accBtn.href = '/account-type';
  }
}

/**
 * Fixes subcategory menu navigation issue on tablets.
 */
function navFix() {
  if ($(".nav-item-root ul li ul li ")) {
    $(".nav-item-root ul li ul li ").on("touchend", function (event) {
      let clickedElement = $(event.target);
      $(clickedElement).trigger("click");
    });
  }
}

export { flagLinks, addCountryClass, createAccountLinks, navFix }
