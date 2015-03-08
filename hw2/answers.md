Evan Sandhoefner
================
CS 171: Pset #2
---------------
### Spring 2015

notes to self: turn off word wrap (better way?)
examples in 1.2
correctness/completeness overall

**0.1** The X and Y coordinates of a given node in this graph are basically arbitrary. The graph will look different each time it's generated. The links between nodes are more meaningful than the positions of nodes. This style of graph is well-suited to data representing relationships, such as characters in an opera, international trade partners, etc.

**0.2** Shapes (other than circles), textures, orientations (for non-circle shapes), hues (within colors), thickness of node borders and of links, length of links, animations (e.g. key country nodes blinking).

**0.3** Most of the above visual variables are independent. For example, changing the shape of a node has no impact on its color. One example of a dependent pair of visual variables are link length and node position. If you double the length of all the links, the nodes will become more widely spread.

**1.1** Absolute position is very simple and straightforward. You can read the list quickly without skipping over big white spaces at the top. There isn't overlapping text at the bottom. Relative position gives you a sense of the magnitude of differences between countries, rather than just the order of the countries. This is important information to convey, but it comes with the aforementioned side-effects. Increasing overall spread could make the bottom countries more readable, but it would also make the top countries even more comically far apart. Maybe you could use a mouseover function to temporarily spread out overlapping text to make it more readable without sacrificing meaning, but that would be more difficult to implement.

**1.2** The best scatterplot data are continuous quantitative variables, either interval or ratio. Ordinal variables also work, because they can be thought of as binned quantitative variables. The more bins, the better. Non-ordinal categorical variables should not be displayed on a scatterplot because there is no meaningful spectrum between the categories that could be plotted on an axis.

**2.1** D3 layouts are simpler to use, especially for non-straightforward shapes like circles. Our scatterplots and uniform/scaled vertical lists map closely to data qualities without much abstraction. Putting the nodes into a circle formation involves more abstraction, which is where things like arc and outerRadius and innerRadius and centroid come in handy.

**3.1** We could only show the top one (or two, or three, or whatever) trade partner(s) for each node. This would cut down on the number of links inside the circle. We could also cut down on the number of nodes displayed. We can leave certain countries out altogether if we're definitely not interested in them (perhaps those which do very little international trade). Better yet, we can filter or aggregate, e.g. by continent.