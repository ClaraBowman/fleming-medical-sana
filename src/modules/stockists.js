/**
 * Stockists Banner.
 */
export default function stockistsBanner() {
    let ft = document.querySelector('footer');

    let stockistsEl = document.createElement('div');

    stockistsEl.className += 'stockists';

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
