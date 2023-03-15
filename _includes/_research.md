{% include _slug.md %}

<nav>
    <ul class="submenu">
        <li class="{% if slug == 'research' %}current{% endif %}"><a href="/research">projects and labs</a></li>
        <li class="{% if slug == 'publications' %}current{% endif %}"><a href="/research/publications">publications</a></li>
        <li class="{% if slug == 'student-theses' %}current{% endif %}"><a href="/research/student-theses">student theses</a></li>
    </ul>
</nav>