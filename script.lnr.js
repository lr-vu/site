'use strict';

addEventListener('DOMContentLoaded', (event) => {

    // * Collect all keywords
    let pubs = document.querySelectorAll('ul.publications li ul.keywords li')
    pubs = [...pubs];

    let keywords = new Set();

    pubs.forEach((pub) => {
        keywords.add(pub.innerHTML);
    });

    // * Generate filter menu

});

/**
 * Filter click event.
 */
function filterClick(event) {
    
}
