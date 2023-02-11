'use strict';

addEventListener('DOMContentLoaded', (event) =>
{

    // * Collect all keywords
    let pubs = document.querySelectorAll('ul.publications li');
    pubs = [...pubs];

    let allKeywords = new Set();

    pubs.forEach((pub) =>
    {
        let kws = pub.querySelectorAll('ul.keywords li');
        kws = [...kws];

        let myKeywords = new Set();

        kws.forEach(kw => {
            allKeywords.add(kw.innerHTML);
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

    allKeywords.forEach(keyword =>
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

/**
 * Filter click event.
 */
function filterClick(event)
{

    let keyword = event.target.innerHTML;

    let all = keyword == 'show all';

    let pubs = document.querySelectorAll('ul.publications li')
    pubs = [...pubs];

    pubs.forEach(pub => {

        pub.classList.remove('hidden');

        if ( ! ( all || pub['keywords'].has(keyword)) )
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