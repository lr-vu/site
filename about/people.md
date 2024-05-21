---
title: people
class: people
--- 

{% comment %}

People are added in `/data/people.yaml`. Make sure to add people with one of the roles: staff, postdoc, phd or guest, 
or they won't show up.

{% endcomment %}

{% assign people = site.data.people | sort: 'orderby' %}

{::nomarkdown}
{% assign roles = "staff, postdoc, phd, research_staff, guest" | split: ", " %}
{% for role in roles %}
    <section>
    <h2>{% case role %}
    {% when 'staff' %}Staff
    {% when 'postdoc' %}Postdocs
    {% when 'phd' %}PhD students
    {% when 'research_staff' %}Resesarch Assistants
    {% when 'guest' %}Guests
    {% endcase%}</h2>
    
    {% for person in people %}
        {% if person.role == role %} 
        <div class="person">
            <img src="{{person.image}}">
        
            <div class="info">
            <h3>{{person.name}}</h3>
            <span class="title">{{person.title}}</span>
            
            <ul class="keywords">
                {% for keyword in person.keywords %}
                <li>{{keyword}}</li>
                {% endfor %}
            </ul>
            
            <ul class="links">
                {% if person.mail %}
                    <li><a href="mailto:{{person.mail}}">mail</a></li>{% endif %}
                {% if person.website %}
                    <li><a href="{{person.website}}">site</a></li>{% endif %}
                {% if person.twitter %}
                    <li><a href="{{person.twitter}}">twitter</a></li>{% endif %}
                {% if person.scholar %}
                    <li><a href="{{person.scholar}}">scholar</a></li>{% endif %}
                {% if person.mastodon %}
                    <li><a href="{{person.mastodon}}">mastodon</a></li>{% endif %}
                {% if person.linkedin %}
                    <li><a href="{{person.linkedin}}">linkedin</a></li>{% endif %}
                {% if person.github %}
                    <li><a href="{{person.github}}">github</a></li>{% endif %}

            </ul>
            </div>
        </div>

        {% endif %}
    {% endfor%}
    </section>
{% endfor %}

<section class="alumni">
    <h2>Alumni</h2>
    <ul>
    {% for person in site.data.people %}
        {% if person.role == 'alumnus' %}
            
            <li>{% if person.website %}<span>{{person.name}}</span>{% else %}<a href="{{person.website}}">{{person.name}}</a>{% endif %}
            {{person.bio | markdownify }}</li>

        {% endif %}
    {% endfor%}
    <ul>
</section>

{:/nomarkdown}


