CS 171 Visualization
HW 1
===
Jennifer Le Hegaret

jlehegaret@gmail.com

## Question 1.1

Using the DOM Inspector, we see a table with a tbody which is populated with row upon row of data.  Viewing the HTML source code, however, we do not see that table element at all - only the script element which created that table element as the page loaded.

The DOM Inspector is very useful to see what content exactly the browser is presenting.  The HTML source is useful to see how that content was actually generated.

## Question 1.2

If you are referring to the table immediately below this question, which has one header row and three rows of data, that table is just hard-coded in the markup document. I don't know if you used software to generate something to copy and paste or if you just typed it by hand.  As for the original data, while I would guess it comes from the JSON file, I can't tell now that it's been hard-coded into the markup document.

## Question 2.1

It would not be convenient to filter any of the other columns via a similar group of checkboxes, unless one were sure that *year* would always be a small number of values.  However, it might be nice to specify a desired range for the *gdp*, *life expectancy*, and *population* columns with some sort of html widget.

## Question 3.1

*Year* is another column by which it would be good to aggregate.  I would group the values by the discrete year value.  An appropriate HTML widget would be simply to add a *"by Year"* radio button to the Aggregation section of our form, or to transform the radio buttons into dropdown lists - summarize first by (*continent* or *year* or *none*) and then by (*continent* or *year* or *none*), so that the user can choose the primary grouping.

## Question 4.1

In the new multi-year dataset, the *years* attribute is an array which holds objects, each of which contains year-specific data for the country's gdp, population, life expectancy, et cetera.

## Question 5.1

To be honest, not having a web design background, I am not sure what examples to cite about the pros and cons of using HTML vs. SVG.  However, from what I understand, the vector-based nature of SVG makes it very easy to generate complex shapes in very few lines, while HTML's Canvas is more pixel-by-pixel, so it is probably harder to map data to shapes in Canvas.  On the other hand, it might be easier for a developer to match data to shape using more basic HTML elements than using this more advanced SVG option.  And more basic HTML elements could also have event handlers put on them, like the SVG elements.  However, basic HTML elements have very very basic shapes.  If you need something other than rectangles, and you need something that can react, SVG seems a clear winner.  It's nice that it has gained traction as a more universal graphic format, too.

## Question 6

My design decision was to keep the animation simple and not get in the way of the data.  I added a color key per continent to match the color coding shown in our example.  I added tooltips onto the data bars and a display of the currently selected year.  I added a smooth transition of now-irrelevant bars leaving and new bars arriving from the top of the screen, as the user's data changes were made there.  And I provided object constancy by allowing bars to rearrange and adjust themselves as much as possible rather than leaving and re-entering the screen.

By the way, I also added the ability to choose ascending or descending sort by clicking on the bars/labels, as I often wanted to switch between the two orders.  And the heading now clearly summarizes the aggregation of all of the user's choices.

## Question 7.1

Visualization is greatly useful for understanding a huge amount of complicated quantitative data, such as the amount of money still available across a large number of funds that are available for funding student experiences.  It is much easier to get a sense of how much money remains by seeing the overall prevalence of red or green rather than doing mental arithmetic to add and subtract a lot of individual numbers.

## Question 7.2

One of the many limitations of static charts which can be solved with interactivity is by which attribute is the data sorted.  It can be interesting to sort a table listed funded student experiences by:  the fund used, the house the student lives in, the country visited, the purpose of the visit, etc.  With interactivity, we can sort the data however we want rather than being able to see it in only one order.

## Question 7.3

One limit of visualization is that it is not really appropriate for making a decision *in itself*.  It helps humans make decisions, but it does not successfully automate decisions so that the human is not longer needed to make the actual decision.

## Question 7.4

Data semantics are important for data because, without the semantics, we have no way to know what this data is about.  Without the semantics, data is just meaningless numbers and characters.  With the semantics, we can understand what the data has captured about which item of interest.

## Question 7.5

a.  We can compare two quantitative attributes to see which is of greater magnitude and by what proportion.  We can perform any sort of mathematical comparison on them.

b.  When we have two categorical attributes, we can just evaluate if one attribute is equal to the other or not.  One may be in a certain subset of the other, they may be exactly the same, or they may be different.

c.  Two attributes of ordinal scale may be compared as to relative magnitude or order, but they cannot be compared on an absolute scale.

## Question 7.6

Visual variables which allow grouping are:
* position
* tilt
* shape
* area (as long as the shapes are identical across the different area values)
* color by hue (with an additional possibility of forming subsets via luminance and saturation)
* motion - speed and direction (basically, these provide a more dynamic form of position)
* presence or lack of blinking (things that blink together will seem like a group)
* texture


## Question 7.7

Visual variables which allow quantitative comparison are:
* position along a scale
* length
* tilt
* area (in 2d) and volume (in 3d) (although humans are pretty inaccurate at evaluating either)
* speed (of motion, or of blinking)
* also, color via varying degrees of luminance and saturation ONLY (NOT of hue) can provide at least relative comparison of quantitative data
* degree of curvature
