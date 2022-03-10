import * as header from './modules/header';
import * as footer from './modules/footer';
import productPage from './modules/productPage';
import profiles from './modules/profiles';

document.addEventListener('DOMContentLoaded', () => {
    
    header.createAccountLinks();
    header.flagLinks();
    header.addCountryClass();
    
    footer.socialLinks();
    footer.whereToFindUs();

    productPage();
    profiles();

    header.navFix();
});
