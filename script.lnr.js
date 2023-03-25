'use strict';

addEventListener('DOMContentLoaded', (event) =>
{
    // * These keywords are used in the filter menu
    let kwWhitelist = ['machine learning', 'reinforcement learning', 'health', 'biomedical ai', 'linked open data',
                'graph learning', 'semantic web']

    // * Collect all keywords
    let pubs = document.querySelectorAll('ul.publications li');
    pubs = [...pubs];

    pubs.forEach((pub) =>
    {
        let kws = pub.querySelectorAll('ul.keywords li');
        kws = [...kws];

        let myKeywords = new Set();

        kws.forEach(kw => {
            myKeywords.add(kw.innerHTML);
        });

        pub['keywords'] = myKeywords;

    });

    // * Generate filter menu
    let nav = document.querySelector('nav.publication-links');

    let span = document.createElement('span');
    span.innerHTML = 'keyword: ';
    let ul = document.createElement('ul');

    nav.prepend(span, ul);

    let li0 = document.createElement('li');
    let button0 = document.createElement('button');

    button0.innerHTML = 'show all';
    button0.className = 'link'
    button0.disabled = true;
    button0.addEventListener('click', filterClick);

    li0.append(button0);
    ul.append(li0);

    kwWhitelist.forEach(keyword =>
    {
        let li = document.createElement('li');
        let button = document.createElement('button');

        button.innerHTML = keyword;
        button.className = 'link'

        button.addEventListener('click', filterClick)

        li.append(button);
        ul.append(li);
    });

});

function isIn(term, list) {
    /**
     * Check whether a term is in a list of string, ignoring cases both ways.
     *
     * In the case of a match, return the string in the list. Otherwise return false.
     */
    for(let lterm of list)
    {
        if (lterm.toLowerCase() == term.toLowerCase())
            return true;
    }

    return false;
}

/**
 * Filter click event.
 */
function filterClick(event)
{

    let keyword = event.target.innerHTML;

    let all = keyword == 'show all';

    let pubs = document.querySelectorAll('ul.publications > li')
    pubs = [...pubs];

    pubs.forEach(pub =>
    {
        pub.classList.remove('hidden');

        if ( ! ( all || isIn(keyword, pub['keywords'])) )
        {
            pub.classList.add('hidden');
        }
    });

    // * Reset all links to active, and disable the one that was clicked
    let links = document.querySelectorAll('nav.publication-links ul li button')
    links = [...links];

    links.forEach(link => {
        link.disabled = false;
    });

    event.target.disabled = true;

    // * Reset the years so that only the top pub for a given year has it as non-hidden.

    let lastYear = -1;

    // * loop over all non-hidden publications
    pubs.forEach(pub => {
        if ( ! pub.classList.contains('hidden') )
        {
            let yearNode = pub.querySelector('.issued')
            if (yearNode)
            {
                yearNode.classList.remove('hidden');

                if (yearNode.innerHTML == lastYear)
                    yearNode.classList.add('hidden')

                lastYear = yearNode.innerHTML
            }
        }
    });

}