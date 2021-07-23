/**
 * Covid-19 Top Banner Script.
 */
export default function covidBanner() {
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
