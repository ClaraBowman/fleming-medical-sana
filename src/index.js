import * as header from './modules/header';
import * as footer from './modules/footer';
import productPage from './modules/productPage';
import profiles from './modules/profiles';
import engagebay from './modules/engagebay';

document.addEventListener('DOMContentLoaded', () => {
    
    header.createAccountLinks();
    header.newPortalLinks();
    header.flagLinks();
    header.addCountryClass();
    
    footer.socialLinks();
    footer.whereToFindUs();

    productPage();
    profiles();

    header.navFix();

    engagebay();
});
