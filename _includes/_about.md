{% include _slug.md %}

<nav>
    <ul class="submenu">
        <li class="{% if slug == 'about' %}current{% endif %}"><a href="/about">about</a></li>
        <li class="{% if slug == 'highlights' %}current{% endif %}"><a href="/about/highlights">highlights</a></li>
        <li class="{% if slug == 'people' %}current{% endif %}"><a href="/about/people">people</a></li>
        <li class="{% if slug == 'jobs' %}current{% endif %}"><a href="/about/jobs">jobs</a></li>
    </ul>
</nav>