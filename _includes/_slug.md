{% comment %}
    Inspect the url to find the short lowercase anme ("slug") of the second level of the menu hierarchy. If none exists,
    use the first. Used to highlight the current page in the menu. This approach is a bit brittle, but it should be fine
    if we test carefully.
{% endcomment %}

{% assign tokens = page.url | split:'/' %}

{% assign slug = '' %}
{% if tokens.size > 2 %}
    {% assign slug = tokens[2] %}
    {% assign slug = slug | split: '.' | first %}
{% else %}
    {% assign slug = tokens[1] %}
{% endif %}