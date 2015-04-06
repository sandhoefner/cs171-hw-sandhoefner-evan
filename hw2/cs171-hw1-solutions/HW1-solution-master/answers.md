Homework 1 Solutions
===

## 1 - Improving the table presentation

**Question 1.1:** Looking at the page containing the table, what are the differences between the DOM as shown by the [DOM inspector](http://en.wikipedia.org/wiki/DOM_Inspector) and the HTML source code? Why would you use the DOM inspector? When is the HTML source useful?

**Answer 1.1:**

* The DOM is a tree structure created by the browser by interpreting JavaScript and HTML. It is not stored in a file.
* The HTML source is the source code of the page as written by the programmer. Assuming there is no server-side code (such as cgi or php), it should *never change*.
* DOM inspector can be used to understand the current structure of a web page and the attribute of every node. This is useful as a 1) a visualization is a program that is often dynamically created by JavaScript when it is loaded, and 2) the program often changes over time and particularly after the user interacts with it.
* DOM inspector offers several views on the DOM, such as its structure and an interactive JavaScript console.
* HTML source is mainly useful to detect any runtime error (e.g. JavaScript or HTML syntax error, etc.).

**Question 1.2:** Below we have partially reproduced the first lines from the table's dataset. What piece of software generates this table? Where are the original data stored?

**Answer 1.2:**

* The data is stored within this page (look at its [source code](https://raw.githubusercontent.com/CS171/2015-cs171-homework/master/hw1/README.md))
* However the data have been processed by a markdown interpreter and styled using GitHub's styling code and rendered as a HTML table.

## 2 - Interactive Country Filter

**Question 2.1:** Would you filter other columns from the table the same way? E.g. would you use checkboxes or any other HTML widget?

**Answer 2.1:**

* It depends on two things: the type of the value, and how many distinct values there are.

 * `name` (nominal values, 119 distinct values): using a dropdown list
 * `continent` (categorical values, 5 distinct values): dropdown list could have also been used
 * `gdp` (quantitative value): most likely with a time slider ranging from the minimal value (or zero) to the maximal value
 * `life_expectancy` same as above
 * `population`	same as above
 * `year` depending on the number of years, either a checkbox list or a range slider

## 3 - Aggregate Countries

**Question 3.1:** Could you aggregate the table using other columns? If you think yes, explain which ones and how you would group values. Which HTML widgets would be appropriate?

**Answer 3.1:**

 * `name`: no immediate direct aggregation is possible (nominal type)
 * `continent`: one can think of other level of aggregation (e.g. by sub-continent)
 * `gdp`: by groups of values (e.g. countries between 0 and 1B, between 1B and 10B, etc..)
 * `life_expectancy`: same as above
 * `population`: same as above
 * `year`: same as above

## 4 - Countries Change over Time

**Question 4.1** What does the new attribute `years` hold?

**Answer 4.1**

This attribute is structured as a dictionary where each entry contains values for a given time point.

## 5 - SVG Bar Chart

**Question 5.1** What are the pros and cons of using HTML vs. SVG? Give some examples in the context of creating visualizations.

**Answer 5.1**

(Note that we don't consider canvas as part of HTML in this answer. However, this is fine to answer this question with a comparison of SVG vs Canvas).

* Pros HTML: 
 * Can benefit from some CSS styling (which are not being used by SVG): animations, advanced styling effects, etc.
 * HTML has originally been designed for document publications. Some features facilitates this process, such as image backgrounds, text ellipsis, responsive page layouts, etc. which can be difficult to reproduce in SVG.

* Pros SVG: 
 * Lots of pre-defined specific graphical marks (`circle`, `rect`, etc.). And a generic one (the `path`) that provides flexibility to create new marks (e.g. arcs, blobs).
 * It can be exported/imported from/to other tools (e.g. Inkscape, Illustrator)
 * It can embed some HTML using [foreignObect element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) and thus benefit from its features.

* Limits of HTML
 * Not many graphical marks (div can be used like rect, but no circle, ..) can be used for visualization.

* Limits of SVG
 * Might not be supported by all browsers.
 * Some web-oriented designs (page layout, tables) have to be re-done manually.


## 7 - Theory

**Question 7.1** Give an example of a situation where visualization is appropriate following the arguments discussed in lecture and in the textbook (the example cannot be the same as mentioned in either lecture or textbook).

* For communication purposes - the point is to inform humans.
* For analysis purposes: when we need humans to make an informed decision, when the questions are not well defined, when contextual knowledge is critical. [Examples that fall into these classes are correct]

**Question 7.2** Which limitations of static charts can you solve using interactivity?

* To deal with dataset size due to cognitive and technical limitations: go from an overview, down to details about individual items.
* To support different queries and tasks. Not all encodings work for all tasks.

**Question 7.3** What are the limitations of visualization? 

Vis is not well suited when we have (a) well defined questions on well-defined datasets, and (b) when decisions are needed in minimal time. 
Visualization is also limited by cognition, perception and computational resources (processing/rendering power as well as pixels). 

**Question 7.4** Why are data semantics important for data?
 
They give the data their real-world meaning.

**Question 7.5** Which relationships are defined for two attributes of (a) quantitative, (b) categorical, or (c) ordinal scale?

* (a) Quantitative:
Testing for equality and order, arithmetic operations. Two subgroups:
  * Interval (location of zero arbitrary)
  Operations: =, ≠, >, <, +, − (distance)
  * Ratio (zero fixed)
  Operations: =, ≠, >, <, +, −,×, ÷ (proportions)
* (b) Categorical/Nominal (labels):
Testing for equality, Operations: =, ≠
* (c) Ordinal (ordered):
Testing for equality and order, Operations: =, ≠, >, <

**Question 7.6** Which visual variables are associative (i.e., allow grouping)?

Good: position, length/size, value/luminance/saturation - all magnitude
Limited: shape, color - all identity

**Question 7.7** Which visual variables are quantitative (i.e., allow to judge a quantitative difference between two data points)?

In order of effectiveness:
* Position (common, unaligned)
* Lenght
* Tilt
* Area
* Depth
* Luminance
* Saturation
* Curvature
* Volume
* ...


