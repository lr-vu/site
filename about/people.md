---
title: people
class: people
--- 

{% comment %}

People are added in `/data/people.yaml`. Make sure to add people with one of the roles: staff, postdoc, phd or guest, 
or they won't show up.

{% endcomment %}


{::nomarkdown}
{% assign roles = "staff, postdoc, phd, guest" | split: ", " %}
{% for role in roles %}
    <section>
    <h2>{% case role %}
    {% when 'staff' %}Staff
    {% when 'postdoc' %}Postdocs
    {% when 'phd' %}PhD students
    {% when 'guest' %}Guests
    {% endcase%}</h2>
    
    {% for person in site.data.people %}
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
                {% if person.website %}
                    <li><a href="{{person.website}}">website</a></li>{% endif %}
                {% if person.twitter %}
                    <li><a href="{{person.twitter}}">twitter</a></li>{% endif %}
                {% if person.scholar %}
                    <li><a href="{{person.scholar}}">scholar</a></li>{% endif %}
                {% if person.mastodon %}
                    <li><a href="{{person.mastodon}}">mastodon</a></li>{% endif %}

            </ul>
            </div>
        </div>

        {% endif %}
    {% endfor%}
    </section>
{% endfor %}

{:/nomarkdown}
