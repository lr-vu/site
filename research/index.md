---
title: Projects and labs
class: projects
---

{% comment %}
When adding a new project, make sure to give every other project the class "alt" on the logo/link. If a logo does not have a wide rectangluar aspect, add the class "square" so that it is scaled down.
{% endcomment %}

# Projects and labs

## AiNed project

<a class="logo alt" href="[https://vu.nl/en/news/2024/nwo-ained-fellowship-grant-awarded-to-filip-ilievski]"><img src="/images/projects/AiNed.svg" title="The logo of the AiNed project"></a>

The [AiNed](https://vu.nl/en/news/2024/nwo-ained-fellowship-grant-awarded-to-filip-ilievski/) is a public-private multi-year program puts the Netherlands in the leading group of AI countries and makes a major contribution to international competitiveness. 

Assistant Professor Artificial intelligence Filip Ilievski has been awarded an AiNed AI Fellowship of 900k€ for his project Human-Centric AI Agents with Common Sense.

## Discovery Lab

<a class="logo" href="https://www.discoverylab.ai/"><img src="/images/projects/discobery_lab.png" title="The logo of the Discovery lab project"></a>

The [Discovery Lab](https://www.discoverylab.ai/)&mdash;a collaboration between the Vrije Universiteit, the University of Amsterdam and Elsevier&mdash;seeks to advance the ability to construct, use and study a large-scale knowledge graph that integrates knowledge across heterogeneous scientific content and data. The knowledge graph will allow for a deeper, richer use of content and data across a larger span of domains than possible thus far.

Discovery lab researchers at L&R have been involved with developing new query embedding methods, representation learning of multimodal data, and building large scale biomedical knowledge graphs.

## Graph-Massivizer

<a class="logo alt" href="https://www.discoverylab.ai/"><img src="/images/projects/Graph-Massivizer.png" title="The logo of the Graph-Massivizer project"></a>

[Graph-Massivizer](https://graph-massivizer.eu/) researches and develops a high-performance, scalable, and sustainable platform for graph processing and reasoning. 
In the project, the KRR group works on graph machine learning for large graphs, using techniques like distributed graph sampling and summarization.
We also contribute to graph querying and reasoning, where some correcteness is traded for a large gain in scalability.
Besides, we investigates ways to work learn on graph streams without re-training the machine learning model.
All of this is part of a larger whole in which performance modelling, and environmental sustainability tradeoffs are considered across the computing continuum.


## Hybrid Intelligence

<a class="logo alt" href="https://www.hybrid-intelligence-centre.nl/"><img src="/images/projects/hybrid_intelligence.jpg" title="The logo of the Hybrid intelligence project"></a>

The [Hybrid Intelligence](https://www.hybrid-intelligence-centre.nl/) centre brings together researchers from 6 Dutch universities with the common task of using artificial intelligence to _complement_ rather than replace human intelligence. The Hybrid Intelligence Center is funded by a 10 year Zwaartekracht grant from the Dutch Ministry of Education, Culture and Science.

## LEAPfROG

<a class="logo" href="https://www.pharmacoinformaticslab.nl/leapfrog/"><img src="/images/projects/leapfrog.png" title="The logo of the LEAPfROG project"></a>

The [LEAPfROG project](https://www.pharmacoinformaticslab.nl/leapfrog/)  aims for a scientific breakthrough in Artificial Intelligence (AI) application in healthcare by combining machine learning and knowledge representation methods to deliver novel AI-powered tools, methods, models, and a prototype for AI-based decision support system. All to support effective and safe pharmacotherapy in people with multimorbidity. The value of LEAPfROG’s approach will be demonstrated via a clinically relevant and urgent use case of drug-induced kidney diseases (DIKD) in patients with chronic kidney disease (CKD).

## LEMUR

<a class="logo alt" href="https://lemur-dn.github.io/"><img src="/images/projects/lemur.png" title="The logo of the LEMUR doctoral network"/></a>

[LEMUR](https://lemur-dn.github.io/) is a 2021 Marie Skłodowska-Curie Action doctoral network on Learning with Multiple Representations. LEMUR aims to develop the theoretical foundations and a first set of algorithms for the new “Learning with Multiple Representations” (LMR) paradigm. Moreover, corresponding applications will be developed to demonstrate the usefulness of the new family of approaches.

## MUHAI

<a class="logo" href="https://muhai.univiu.org/"><img src="/images/projects/muhai.png" title="The logo of the MUHAI project"></a>

[MUHAI](https://muhai.univiu.org/) (meaning and understanding in human-centric IA), is an international project that brings together researchers from France, Germany, Belgium and the Netherlands, with the aim of understanding _meaning_ in the context of modern AI methods.

## PersOn
<a class="logo alt" href="http://www.personalisedcareinoncology.nl/"><img src="/images/projects/PersOn_logo.png" title="The logo of the PersOn project"></a>

The [PersOn](https://www.personalisedcareinoncology.nl/) project, in collaboration with partners from academia and industry, is focused on developing explainable, maintainable, and trustworthy Clinical Decision Support Systems (CDSS) for personalised care in oncology.  We aim to put Hybrid Intelligence challenges into practice. This involves achieving explainable Hybrid Intelligence by creating comprehensive explanations for the responses generated by the CDSSs. Additionally, we are committed to ensuring responsible Hybrid Intelligence by providing guarantees for the accuracy and safety of CDSSs responses.


## The DReAMS Lab

<span class="logo square"><img src="/images/projects/Huawei_Standard_logo.svg" title="The logo of Huawei"></span>

The DReAMS lab is a collaboration between the Vrije Universiteit, the University of Amsterdam and Huawei. Its aim is to provide the next generation in search technology, taking into account different languages and cultures in Europe. 

The mission of the lab is to ensure that the next generation of search technology should be ubiquitous, accurate, flexible, relevant, intelligent, humane and safe.

## GOBLIN
<a class="logo alt" href="https://www.cost.eu/actions/CA23147/"><img src="/images/projects/goblin.png" title="The logo of the GOBLIN project"></a>

The goal of the [GOBLIN COST project](https://www.cost.eu/actions/CA23147/) is to increase and enhance the public open knowledge available in Europe and beyond. The aim is to provide a large-scale, high quality, cross-domain and multilingual knowledge graph technology that is free to use, reuse, and redistribute. L&R is active in Work Package 3 on Knowledge Graph-aware Services and Methods.


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
