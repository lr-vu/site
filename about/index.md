---
title: About us
article: true

---

# Learning and reasoning

The Learning & Reasoning group studies the ways _machine learning_, _symbolic knowledge_ and _formal reasoning_ can interact to enhance one another. We believe that inductive data-driven learning and deductive knowledge-based reasoning have complementary strengths and weaknesses.

A vast amount of the world’s data and knowledge is _relational_ in nature. By designing machine learning methods that consume such symbolic, relational knowledge or interact with formal reasoning methods, we aim to discover new knowledge, to detect mistakes in existing knowledge, and to develop alternative forms of inference.

## The two histories of AI

The history of artificial intelligence is traditionally divided into two camps. They each go by many names, but we can broadly capture them as the _symbolic_ approaches, and the _learning_ approaches.

The symbolic approaches, broadly, cover those attempts at solving a problem that first describe the world in terms of symbols and the relations between them. They then attempt to explain, in more or less explicit rules, how a problem can be solved in these terms. One example is playing chess. We can represent all the elements of a chess position: the pieces, where they are on the board and what moves are allowed, very naturally. With such a representation, the problem of playing chess is reduced to two things: defining what constitutes a good position, and searching for a way to reach such a position.

In the case of chess, this line of investigation led to a watershed in 1997, when IBM's Deep Blue became the first computer system to beat the reigning human champion at chess.  

<figure class="embed">
<iframe src="https://www.youtube.com/embed/ja3UHKbXsZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption>Footage of Kasparov playing Deep Blue in 1997.</figcaption>
</figure>

Deep Blue combined a highly optimized search algorithm, with a vast amount of human knowledge about chess, specifally encoded to help it evaluate how valuable various positions would be in the game. Not long after this first victory, super-human chess-playing algorithms could be run first on a desktop computer, and then on a cell phone. 

The other approach, that of _learning_, entirely sidesteps the issue of understanding up front how the solution to a problem works. Instead of representing the problem in discrete symbols and relations, and trying to capture the rules that govern a solution, we represent the problem as a series of _examples_. Usually examples of the kind of input and output we expect of our program. Then, rather than building the connection between input and output ourselves, we _train_ our program to learn it.

Learning approaches had their own moment in the sun, very similar to that of Deep Blue. Not with chess, this time, but with a similar board game: Go. In March 2016, DeepMind's AlphaGo beat Lee Sedol&mdash;one of the world's strongest players&mdash;in four matches out of five.

AlphaGo shared some principles with Deep Blue, notably the idea of searching the game tree for good moves, but it didn't make use of any hand-written knowledge. Instead, it _learned_. First from a database of games between human players, and then by playing games against copies of itself. _What_ it learned was never made explicit. It was encoded in the millions of weights of a set of _deep neural networks_. These could tell the algorithms which board positions were likely to lead to a win, and which moves were likely to be good. In a sense, they functioned like a kind of _intuition_, telling the search algorithm which paths in the game tree to explore.

<figure class="embed">
<iframe  src="https://www.youtube.com/embed/HT-UZkiOLv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<figcaption>A clip from the documentary <a href="https://en.wikipedia.org/wiki/AlphaGo_(film)">AlphaGo</a>. It focuses on the now-famous &ldquo;move 37&rdquo;a particularly unusual move, which AlphaGo played in the second game.</figcaption>
</figure>

These two highlights show some of the strengths and benefits of both approaches. In the case of Go, for instance, the available knowledge about the game was insufficient to allow the approach of Deep Blue to work. Where knowledge is unavailable, and we can build on best-effort guesswork, learning cand be a powerful way to bridge the gap.

However, learning how to play Go required much more than just a fast-searching computer. Unlike Deep Blue, AlphaGo needed to be _trained_. Before it could play Lee Sedol, it needed to observe others play. First humans, and then copies of itself. In this case, such observations were easy to generate. In most domains, however, the amount of data we have available to learn from is severely limited. 

Finally, while AlphaGo learned to play at a level that had never been seen before, the knowledge that it had collected has remained largely hidden away. Whatever it has learned, it cannot communicate it to us. Perhaps, in the game of Go, this is how it must be, and high-level play always requires a certain amount of intuition. In many other, domains however, experts, human or otherwise, can do more than just show expert behavior: they can tell us _what_ they are doing and _why_. The can take their expertise, and translate it to _symbolic representations_ that are generally useful. So far, learning methods have been reluctant to reveal their internals to us.   

## Where are we now?

In the years since AlphaGo, it's fair to say that the big leaps forward in AI have been in learning. Here are some examples.

<figure class="wide">

<img src="/images/stylegan.jpg" class="tile3"
><img src="/images/dalle.png" class="tile3"
><img src="/images/chatgpt.png" class="tile3"
>
<figcaption>Some recent successes in AI. From left to right: generating life-like human faces with StyleGAN (2018), generating arbitrary images from natural language prompts&mdash;_an armchair in the shape of an avocado_&mdash;with DALL&middot;E (2020), having a conversation in natural language with ChatGPT (2022).
</figcaption>
</figure>

The great speed at which breakthroughs are currently made is mostly down to one thing: _scaling_. As we train large models, with more and more data, we find that some behaviors that have eluded us for decades, simply _emerge_. 

This does not mean, of course, that modern machine learning just boils down to building bigger models of the same kind. To build models that learn well at scale, new models, new algorithms and new theoretical insights are necessary, and a tremendous effort has been necessary to break through the various barriers. 

However, as we study these new, large-scale models, we find that not _everything_ emerges with scale (or at least, not at the scales that have been tried so far). Certain types of structural, logical and relational reasoning remain elusive. Consider, for instance, the following responses (by Dall&middot;E 2) to the prompt _A bowl containing no bananas and one kiwi._

<figure class="wide">
 <img src="/images/dalle1.png" class="tile4"
><img src="/images/dalle2.png" class="tile4"
><img src="/images/dalle3.png" class="tile4"
><img src="/images/dalle4.png" class="tile4"
>
</figure>

While the examples are more photorealistic than most human painters could achieve, the model seems to struggle with simple counting of the objects it generates. Here is another example, from ChatGPT (with GPT-4 as the model):

<figure class="narrow centering">
<img src="/images/chatgpt-mistake.png" class="tile2" alt="User:
Can you arrange the letters in the word substantial in alphabetic order?
ChatGPT:Yes, I can arrange the letters in the word substantial in alphabetical order. Here is the result: aabbilnsstu
User: You've made a mistake, can you tell me what it is?
ChatGPT: Apologies for the mistake. I included an extra 'b' in the alphabetic arrangement of the word substantial. Here is the correct arrangement: aabilnssttu
User: Very good, but you've made another mistake. Can you tell me what it is?
ChatGPT: I apologize for the oversight. It seems I missed the letter 'u' in my previous response. Here is the corrected alphabetical arrangement of the letters in the word substantial: aabilnssttuu" >
</figure>

ChatGPT makes a mistake, corrects it when the mistake is pointed out, but then when it gives the correct answer, invents another mistake when the user wrongly suggests one exists. 

The point of these examples is not that these models are not impressive. It's quite a feat that ChatGPT understands what we intend for it to do well enough that it tries. The point is that we have in these models lost something that we knew how to do in older AI models. Counting, alphabetization, these are tasks that can be solved by computers so simply and so efficiently, that the methods employed barely count as artificial intelligence. 

And now, after building million-dollar learning models, and feeding them hundreds of gigabytes of data, we find that we have conquered long-standing tasks, and along with them, lost the ability to count.

## Where are we going?

This is our main research area. It can be broken up in a few general research questions:

1. Why is it that these large models have such trouble with simple structural reasoning tasks. Can we expect it to emerge at larger scales? 
2. How can we use the methods that we already have, which _excel_ at structural reasoning and combine them with learning methods, to get the best of both words, without scaling up to eye-watering amounts of data and compute?

These questions suggest various avenues of attack: we can take large machine learning models, and try to interpret how they work. To see how they represent knowledge in the continuum of their internal weight matrices. We can also take large machine learning models and try to adapt them. With domain knowledge and with symbolic methods, to control their behavior. Potentially, this can make them more data-efficient, better controllable and more interpretable. If so, can we do it without losing the robustness and flexibility that large machine learning models now exhibit?

From the other side, we can look at the vast amounts of relational data and methods that already exist. Efforts like Linked Open Data, have led to tremendous amount of interlinked symbolic data stored in the form of _knowledge graphs_. Symbolic reasoning methods are used to enrich and query this knowledge. 

In this case, can we start with symbolic knowledge and _add learning_? This would allow us, for instance, to ask ambiguous questions of our data, to fill in the blanks with common sense, and for users to talk to their data using natural language.

This is what we mean when we say that learning and reasoning methods have complementary strengths and weaknesses. The next big question is AI, if you ask us, is how to combine the two. How to get the robustness of a deep learning system with the data sparsity and interpretability of a symbolic reasoner.

{% comment %}
<figure class="wide">
<div><img src="/images/rosenblatt.png"></div>
<figcaption>Frank Rosenblatt, inventor of the perceptron (1954), a very early machine learning method.</figcaption>
</figure>
{% endcomment %}
