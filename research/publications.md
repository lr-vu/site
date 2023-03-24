---
title: Publications
class: publications
js: true
---

# Publications

{::nomarkdown}

<nav class="publication-links">
<!-- <a href="/files/publications.bib" class="bibtex">download as bibtex</a> -->
</nav>

{% assign pubs = site.data.publications | sort: 'data.date' | reverse %}

<ul class="publications">
{% for publication in pubs %}
    <li>
        <h3>{{publication.data.title}}
        {% if publication.data.url != '' %}
            {% assign suffix = publication.data.url | slice: -4, 4 %}
            {% if suffix == '.pdf' %}
                <a href="{{publication.data.url}}" class="pdf">pdf</a>
            {% else %}
                <a href="{{publication.data.url}}" class="non-pdf">link</a>
            {% endif %}
        {% endif %}
        {% assign current_issued = publication.data.date | split: '-' | first %}
        </h3>
        <span class="issued {% if current_issued == last_issued %}hidden{% endif%}">{{current_issued}}</span>
        {% if publication.data.creators %}
        <ul class="authors">
            {% for author in publication.data.creators %}<li>{{author.firstName}} {{author.lastName}}</li>{% endfor %}</ul>
        {% endif %}
        {% if publication.data.proceedingsTitle %}
        <span class="venue">Published at {{publication.data.proceedingsTitle}}.</span>
        {% elsif publication.data.publicationTitle %}
        <span class="venue">Published at {{publication.data.publicationTitle}}.</span>
        {% elsif publication.data.conferenceName %}
        <span class="venue">Published at {{publication.data.conferenceName}}.</span>
        {% endif %}
        {% if publication.data.tags %}
        <ul class="keywords">
            {% assign keys = publication.data.tags %}
            {% for key in keys %}<li>{{key.tag}}</li>{% endfor %}
        </ul>
        {% endif %}
    </li>

    {% assign last_issued = publication.data.date | split: '-' | first %}

{% endfor %}
</span>

{:/nomarkdown}
