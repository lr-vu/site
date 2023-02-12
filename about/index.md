---
title: About us
article: true

---

# Learning and reasoning

A vast amount of the world’s data and knowledge is _relational_ in nature. By designing machine learning methods that consume such symbolic, relational knowledge or interact with formal reasoning methods, it becomes possible to discover new knowledge, to detect mistakes in existing knowledge, and to develop alternative forms of inference.

The Learning & Reasoning group studies the ways machine learning, symbolic knowledge and formal reasoning can interact to enhance one another. We believe that inductive data-driven learning and deductive knowledge-based reasoning have complementary strengths and weaknesses. 

## The two histories of AI

Thew history of artificial intelligence is traditionally divided into two camps. They each go by many names, but we can broadly capture them as the _symbolic_ approaches, and the _learning_ approaches.

The symbolic approaches, broadly, cover those attempts at solving a problem that first describe the world in terms of symbols and the relations between them. They then attempt to explain, in more or less explicit rules, how a problem can be solved in these terms. One example is playing chess. We can represent all the elements of a chess position: the pieces, where they are on the board and what moves are allowed, very naturally. With such a representation, the problem of playing chess is reduced to two things: defining what constitutes a good position, and searching for a way to reach such a position, despite our opponents best efforts to keep away.

In the case of chess, this line of investigation led to a watershed in 1997, when IBM's Deep Blue became the first computer system to beat the reigning human champion at chess.  

<figure>
<iframe width="800" height="494" src="https://www.youtube.com/embed/aNpv3LfCUa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>

Deep blue combined a highly optimized search algorithm, with a vast amount of human knowledge about chess, specifally encoded to help it evaluate how valuable various positions would be in the game. Not long after its first victory, super-human chess players could be run first on a computer, and then on a cell phone. 

The other approach, that of _learning_, entirely sidesteps the issue of understanding up front how the solution to a problem works. Instead of representing the problem in discrete symbols and relations, and trying to capture the rules that govern a solution, we represent the problem as a series of _examples_. Usually examples of the kind of input and output we expect of our program. Then, rather than building the connection between input and output ourselves, we _train_ our program to learn it.

<figure class="wide">
<img src="/images/rosenblatt.png">
<figcaption>Frank Rosenblatt, inventor of the perceptron (1954), a very realy machine learning method.</figcaption>
</figure>

Learning approaches had their own moment in the sun, similar to Deep Blue. Note with chess, this time, but with Go. 

## Where are we now?

In recent years, AI has made tremendous progress. First in areas like image classification, and then in generative modelling

<figure>
- StyleGAN
- Dall-E
- ChatGPT
<figcaption>Some recent successes in AI. Generating life-like human faces with StyleGAN (2018), generating arbitrary images from natural language prompts with DALL&middot;E (2020), and having a conversation in natural language with ChatGPT (2022).
</figcaption>
</figure>


##

In the other direction, the use of prior knowledge can improve machine learning methods by reducing the need for huge amounts of data and computing resources, and by making machine learning models more generalisable and interpretable. We study how symbolic methods can be used to represent such prior knowledge, and how formal reasoning can be combined with learning to achieve the best of both worlds.

We apply our results in a variety of different domains, with a particular emphasis on medicine and scientific discovery.
