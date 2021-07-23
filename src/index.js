import stockistsBanner from './modules/stockists';
import newsletterReplace from './modules/newsletter';
import productPageScript from './modules/productPage';
import sliders from './modules/sliders';

document.addEventListener('DOMContentLoaded', () => {
    
    stockistsBanner();
    newsletterReplace();
    productPageScript();
    sliders();
    
});
