export { socialLinks, whereToFindUs };

/**
 * Social Links/Newsletter Replacement Script
 */
function socialLinks() {
  let socialIconsMarkUp = `
    <span class="font-h4">Stay Updated</span>
    <div class="social-icons">
        <span>Fleming Medical</span>
        <a href="https://www.linkedin.com/company/fleming-medical-ltd" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/FlemingMedical/" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
        <a href="https://twitter.com/FlemingMedical" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a>
        <a href="https://www.youtube.com/user/flemingmedical/featured" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a>  
    </div>
    <div class="social-icons">
        <span>Medicare</span>
        <a href="https://www.facebook.com/medicarefirstaid" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/Medicare1stAid" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/medicarefirstaid/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="social-icons">
        <span>Physiologix</span>
        <a href="https://www.facebook.com/PhysiologixSports" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/Physiologix_" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/physiologix_sports/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>`;
  
  // Replace the newsletter if it is present, otherwise create a new div.
  let newsletter = document.getElementsByClassName("newsletter")[0];
  if (newsletter) {
    newsletter.innerHTML = socialIconsMarkUp;
  } else {
    let socialIcons = document.createElement("div");
    socialIcons.classList.add("column", "newsletter");
    socialIcons.innerHTML = socialIconsMarkUp;
    document.querySelector("footer .columns-general.top").appendChild(socialIcons);
  }
}

/**
 * Stockists Banner.
 */
function whereToFindUs() {
  let ft = document.querySelector("footer");

  let stockistsEl = document.createElement("div");

  stockistsEl.className += "stockists";

  let stockistsMarkup = `
    <div class="center">
        <i class="fas fa-map-signs"></i>
        <p>Looking for our products in store? View the map to find your nearest partner Pharmacy</p>
        <a href="/where-to-find-us">
            <i class="fas fa-map-marked-alt"></i>
            <span>Map</span>
            <span>Where to Buy</span>
        </a>
    </div>
    `;

  stockistsEl.innerHTML = stockistsMarkup;

  ft.insertBefore(stockistsEl, ft.childNodes[0]);
}