import { flagLinks, navFix } from './modules/header';
import { socialLinks, whereToFindUs } from './modules/footer';
import productPage from './modules/productPage';
import sliders from './modules/sliders';
import profiles from './modules/profiles';

document.addEventListener('DOMContentLoaded', () => {
    
    flagLinks();
    navFix();
    whereToFindUs();
    socialLinks();
    productPage();
    sliders();
    profiles();
    
});
