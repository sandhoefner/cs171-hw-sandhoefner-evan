Evan Sandhoefner
================
CS 171: Pset #1
---------------
### Spring 2015

**1.1** The DOM arranges the HTML source code into an actual table, which is more visually intuitive. It enables the developer to optimize the presentation of the table, and it enables the viewer to see the data in a neat format. The DOM inspector enables the developer to mouse-over elements in the HTML code and see what they represent in the DOM. The code in the DOM inspector also includes code developed by JavaScript which isn't explicitly visible in the original HTML source code. The source code is useful for getting 'down to the metal' and seeing why your output looks the way it does, without getting lost in the actual content produced at run-time.

**1.2** The original data for my table.html are in countries_2012.json. I'm not sure where the data for the table pictured on the pset spec come from, because countries_2012.json doesn't include Monaco or Gibraltar. At any rate, the table is generated by a combination of pure JavaScript, the JavaScript d3 library, HTML, and CSS.

**2.1** None of the other columns could appropriately be sorted in exactly the same way. This is because there are only 5 continents shared across all the observations, which is ideal for filtering out reasonably-sized groups of observations. Name is unique for each observation, and the numerical observations only have a few ties. Filtering these in the same way as continents would mean getting a table with just one or two rows. If I wanted to filter by GDP, life expectancy, or population, I would filter by ranges - e.g., life expectancy between 40 and 50, between 50 and 60, between 60 and 70, etc. This could be done using checkboxes with set ranges, or a double slider for custom ranges (more complex).

**3.1** It doesn't make much sense to aggregate by other columns, because doing so wouldn't add meaning to the graphic. One option for embellishment, though, is to aggregate by continent and also display the sum of the number of countries in each continent. This is more meaningful than dropping the country variable, which is essentially what the spec indicates.

**4.1** The variable 'years' holds GDP, total export value, population, and life expectancy for each country in each year.

**5.1** SVG is better for visualizations involving a lot of geographic shapes or image-based free-form representation. HTML is better for more rigidly structured, mostly text-based visualizations such as tables.

**7.1** Visualization is an ideal practice for both communication and exploration. For example, visualization can powerfully represent the distrubtion of flood vulnerability across a geographic region via a heat-map style diagram.

**7.2** One obvious solution is sorting. A static chart is only ever sorted by one index in one direction. An interactive chart can be sorted by any index, ascending or descending, which enables viewers to suss out greater meaning from the data. Filtering, aggregating, and changing years (subsections of data) are similar in principle. Visualization enables viewers to efficiently find data which would otherwise require painstaking manual searching across a huge static figure.

**7.3** Visualization is often not appropriate when you are working with a well-defined question on a well-defined data set, or when decisions are needed as quickly as possible. In these circumstances, automation is a better bet. On a design level, visualizations can also only portray so much information before they become too complex to be easily interpreted.

**7.4** Data semantics give our data real-world meaning. Without real-world application, it doesn't matter how concise or effective or attractive a visualization is. Data semantics make the significance of our work clear, and help us interpret visualizations in a relevant way.   

**7.5** In a relationship between two quantitative variables, one is measurably larger or smaller than the other (5 inches versus 3 inches). Categorical variables fall into distinct categories (mammals vs reptiles). Ordinal scale variables are sort of a middle ground (e.g. large, medium, small).

**7.6** Many qualitative variables are associative. For example, the continent column in our table allows grouping because it contains a few qualitative (specifically, categorical) variables repeated various times. On a similar basis, you could group by ordinal variables. In order to group by quantitative variables, you could establish bins.

**7.7** Measures of distance (inches, feet, miles, etc.) are quantitative. Most number-based variables are quantitative - pounds, number of pebbles, etc.