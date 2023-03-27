---
title: Projects and labs
class: projects
---

{% comment %}
When adding a new project, make sure to give every other project the class "alt" on the logo/link. If a logo does not have a wide rectangluar aspect, add the class "square" so that it is scaled down.
{% endcomment %}

# Projects and labs

## CLARIAH

<a class="logo" href="http://www.clariah.nl/"><img src="/images/projects/Clariah-300x83.png" title="The logo of the CLARIAH project"></a>

[CLARIAH](http://www.clariah.nl/) (Common Lab Research Infrastructure for the Arts and Humanities) is a distributed research infrastructure for the humanities and social sciences. The L&R group has been involved since its conception, working together with humanities researchers and social scientists to build critical infrastructure tools.

## Discovery Lab

<a class="logo alt" href="https://www.discoverylab.ai/"><img src="/images/projects/discobery_lab.png" title="The logo of the Discovery lab project"></a>

The [Discovery Lab](https://www.discoverylab.ai/)&mdash;a collaboration between the Vrije Universiteit, the University of Amsterdam and Elsevier&mdash;seeks to advance the ability to construct, use and study a large-scale knowledge graph that integrates knowledge across heterogeneous scientific content and data. The knowledge graph will allow for a deeper, richer use of content and data across a larger span of domains than possible thus far.

Discovery lab researchers at L&R have been involved with developing new query embedding methods, representation learning of multimodal data, and building large scale biomedical knowledge graphs.

## Humane AI

<a class="logo" href="https://www.humane-ai.eu/"><img src="/images/projects/humane_ai.svg" title="The logo of the Humane AI project"></a>

The [Humane AI project](https://www.humane-ai.eu/) aims to shape the AI revolution in a direction that is beneficial to humans both individually and societally, and that adheres to European ethical values and social, cultural, legal, and political norms. It is an international project including industrial partners such as Volkswagen and Airbus, as well as academic institutions from almost all European nations.

## Hybrid Intelligence

<a class="logo alt" href="https://www.hybrid-intelligence-centre.nl/"><img src="/images/projects/hybrid_intelligence.jpg" title="The logo of the Hybrid intelligence project"></a>

The [Hybrid Intelligence](https://www.hybrid-intelligence-centre.nl/) centre brings together researchers from 6 Dutch universities with the common task of using artificial intelligence to _complement_ rather than replace human intelligence. The Hybrid Intelligence Center is funded by a 10 year Zwaartekracht grant from the Dutch Ministry of Education, Culture and Science.

## LEAPfROG

<a class="logo" href="https://www.pharmacoinformaticslab.nl/leapfrog/"><img src="/images/projects/leapfrog.png" title="The logo of the LEAPfROG project"></a>

The [LEAPfROG project](https://www.pharmacoinformaticslab.nl/leapfrog/)  aims for a scientific breakthrough in Artificial Intelligence (AI) application in healthcare by combining machine learning and knowledge representation methods to deliver novel AI-powered tools, methods, models, and a prototype for AI-based decision support system. All to support effective and safe pharmacotherapy in people with multimorbidity. The value of LEAPfROG’s approach will be demonstrated via a clinically relevant and urgent use case of drug-induced kidney diseases (DIKD) in patients with chronic kidney disease (CKD).

## MUHAI

<a class="logo alt" href="https://muhai.univiu.org/"><img src="/images/projects/muhai.png" title="The logo of the MUHAI project"></a>

[MUHAI](https://muhai.univiu.org/) (meaning and understanding in human-centric IA), is an international project that brings together researchers from France, Germany, Belgium and the Netherlands, with the aim of understanding _meaning_ in the context of modern AI methods.

## The DReAMS Lab

<span class="logo square"><img src="/images/projects/Huawei_Standard_logo.svg" title="The logo of Huawei"></span>

The DReAMS lab is a collaboration between the Vrije Universiteit, the University of Amsterdam and Huawei. Its aim is to provide the next generation in search technology, taking into account different languages and cultures in Europe. 

The mission of the lab is to ensure that the next generation of search technology should be ubiquitous, accurate, flexible, relevant, intelligent, humane and safe.

# Previous Projects

<ul>
{% for project in site.data.projects.previous_projects %}
  {% if project.website != null %}
    <li><a href="{{project.website}}">{{project.name}}</a></li>
  {% else %}
    <li>{{project.name}}</li>
  {% endif %}
{% endfor %}
</ul>
