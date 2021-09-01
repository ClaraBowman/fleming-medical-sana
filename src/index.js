import { flagLinks, navFix } from './modules/header';
import { socialLinks, whereToFindUs } from './modules/footer';
import productPageScript from './modules/productPage';
import sliders from './modules/sliders';

document.addEventListener('DOMContentLoaded', () => {
    
    flagLinks();
    navFix();
    whereToFindUs();
    socialLinks();
    productPageScript();
    sliders();
    
});
