---
title: Publications
class: publications
js: true
---

# Publications

{::nomarkdown}

<nav class="publication-links">
<a href="/files/publications.bib" class="bibtex">download as bibtex</a>
</nav>

{% assign pubs = site.data.publications.references | sort: 'issued' | reverse %} 

<ul class="publications">
{% for publication in pubs %}
    <li>
        <h3>{{publication.title}}
        {% if publication.url %}
            {% assign suffix = publication.url | slice: -4, 4 %}
            {% if suffix == '.pdf' %}
                <a href="{{publication.url}}" class="pdf">pdf</a>
            {% else %}
                <a href="{{publication.url}}" class="non-pdf">link</a>
            {% endif %}    
        {% endif %}
        </h3>

        <span class="issued {% if publication.issued == last_issued %}hidden{% endif%}">{{publication.issued}}</span>

        {% if publication.author %} 
        <ul class="authors">
            {% for author in publication.author %}<li>{{author.given}} {{author.family}}</li>{% endfor %}</ul>
        {% endif %}

        {% if publication.container-title %} 
        <span class="venue">Published at {{publication.container-title}}.</span>
        {% endif %}

        {% if publication.keyword %} 
        <ul class="keywords">
            {% assign keys = publication.keyword | split: ', ' %}
            {% for key in keys %}<li>{{key}}</li>{% endfor %}   
        </ul>
        {% endif %}
    </li>

    {% assign last_issued = publication.issued %}
{% endfor %}
</span>

{:/nomarkdown}