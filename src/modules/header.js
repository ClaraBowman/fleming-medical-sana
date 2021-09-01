import isIrishSite from './regex';
export { flagLinks, navFix };

/**
 * Create Country Flag Links.
 */
function flagLinks() {

    let topAction = document.querySelector('.top-header .top-action');
    let countryLink = document.createElement('div');
    countryLink.classList.add('top-dropdown', 'language');
    let countryLinkHTML;
    
    if (isIrishSite()) {
        countryLinkHTML = `
        <div class="opener">
            <img class="flag" src="/content/files/images/languages/flag-ie.svg" alt="Fleming Medical IE" >
        </div>
        <div class="summary">
            <a class="hyp selected" href="/">
                <img src="/content/files/images/languages/flag-ie.svg" alt="Fleming Medical IE" class="flag">Fleming Medical IE
            </a>
            <a href="https://www.flemingmedical.co.uk" target="_blank" class="hyp">
                <img src="/content/files/images/languages/flag-uk.svg" alt="Fleming Medical UK" class="flag">Fleming Medical UK
            </a>
        </div>`;
    } else {
        countryLinkHTML = `
        <div class="opener">
            <img class="flag" src="/content/files/images/languages/flag-uk.svg" alt="Fleming Medical UK" >
        </div>
        <div class="summary">
            <a class="hyp selected" href="/">
                <img src="/content/files/images/languages/flag-uk.svg" alt="Fleming Medical UK" class="flag">Fleming Medical UK
            </a>
            <a href="https://www.flemingmedical.ie" target="_blank" class="hyp">
                <img src="/content/files/images/languages/flag-ie.svg" alt="Fleming Medical IE" class="flag">Fleming Medical IE
            </a>
        </div>`;
    }
    
    countryLink.innerHTML = countryLinkHTML;
    topAction.prepend(countryLink);
}

/**
 * Fixes subcategory menu navigation issue on tablets.
 */
function navFix() {
    $('.nav-item-root ul li ul li ').on('touchend ', function(event) {
        const clickedElement = $(event.target);
        $(clickedElement).trigger( "click" );
    });
}

/**
 * Covid-19 Top Banner Script.
 */
function covidBanner() {
    let cookieName = 'cookieBanner';
    let cookieValue = 'dismissed';

    if (!isBannerDismissed()) createCovidBanner();
        
    function createCovidBanner() {
        // Define the main covid div and create the markup.
        let covidWrapper = document.createElement("div");
        covidWrapper.id = 'covid';
        covidWrapper.innerHTML = '<span>View our COVID-19 Related Products <a href="/covid-19">Here</a></span><i id="covidClose" class="fas fa-times"></i>';
        
        // Insert the covid div.
        let header = document.getElementsByClassName("header-blocks-wrapper")[0];
        let topHeader = document.getElementsByClassName("top-header")[0];
        header.insertBefore(covidWrapper, topHeader);
        
        // Remove it on click and set the cookies
        document.getElementById('covidClose').addEventListener('click', function() {
            document.cookie = `${cookieName}=${cookieValue}`;
            covidWrapper.remove();
        });
    }

    // Check if the banner has already been dismissed.
    function isBannerDismissed() {

        // Get the string containing all cookies
        let decodedCookie = decodeURIComponent(document.cookie);

        // Separate out the cookies
        let cookies = decodedCookie.split(';');
        for (let cookie of cookies) {
            cookie = cookie.trim();

            // Return true if the cookie is present.
            if (cookie === `${cookieName}=${cookieValue}`) {
                return true;
            }
        }

        // Return false if it's not found.
        return false;
    }
}
