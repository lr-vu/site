{% include _slug.md %}

<nav>
    <ul class="submenu">
        <li class="{% if slug == 'about' %}current{% endif %}"><a href="/about">about</a></li>
        <li class="{% if slug == 'publications' %}current{% endif %}"><a href="/about/publications">publications</a></li>
        <li class="{% if slug == 'projects' %}current{% endif %}"><a href="/about/projects">projects</a></li>
        <li class="{% if slug == 'jobs' %}current{% endif %}"><a href="/about/jobs">jobs</a></li>
    </ul>
</nav>
