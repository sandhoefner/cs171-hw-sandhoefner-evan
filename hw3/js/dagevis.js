/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 1/28/15.
 */



/*
 *
 * ======================================================
 * We follow the vis template of init - wrangle - update
 * ======================================================
 *
 * */

/**
 * AgeVis object for HW3 of CS171
 * @param _parentElement -- the HTML or SVG element (D3 node) to which to attach the vis
 * @param _data -- the data array
 * @param _metaData -- the meta-data / data description object
 * @constructor
 */
AgeVis = function(_parentElement, _data, _metaData){
    this.parentElement = _parentElement;
    this.data = _data;
    this.metaData = _metaData;
    this.displayData = [];



    // TODO: define all constants here
    this.margin = {top: 20, right: 0, bottom: 30, left: 70},
    this.width = getInnerWidth(this.parentElement) - this.margin.left - this.margin.right,
    this.height = 400 - this.margin.top - this.margin.bottom;


    this.initVis();

}


/**
 * Method that sets up the SVG and the variables
 */
AgeVis.prototype.initVis = function(){

    var that = this; // read about the this


    //TODO: construct or select SVG
    //TODO: create axis and scales

    // constructs SVG layout
    this.svg = this.parentElement.append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .attr("class", "lightcoral")
      .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

// width="650" height="330" style="background-color: lightblue"
    // creates axis and scales
    this.x = d3.scale.linear()
      .range([0, this.width]);

    this.y = d3.scale.linear()
      .range([0, this.height]);

    this.xAxis = d3.svg.axis()
      .scale(this.x)
      .orient("bottom");

    this.yAxis = d3.svg.axis()
      .scale(this.y)
      .orient("left");

    this.area = d3.svg.area()
      .interpolate("monotone")
      .x0(-70)
      .x1(function(d, i) { return that.x(d)-70 })
      .y(function(d, i) { return i*3.54-20.5;});


    // this.brush = d3.svg.brush()
    //   .on("brush", function(){
    //     // Trigger selectionChanged event. You'd need to account for filtering by time AND type
    //     console.log(that.brush.extent());
    //     console.log(that);

    //     $(that.eventHandler).trigger("selectionChanged",that.brush.extent());
    //   });

    // Add axes visual elements
   
    this.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + this.height + ")")

    this.svg.append("g")
        .attr("class", "y axis")
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("x",-20)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        // .text("Age distribution");

    // filter, aggregate, modify data
    this.wrangleData(null);

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
 * @param _filterFunction - a function that filters data or "null" if none
 */
AgeVis.prototype.wrangleData = function(_filterFunction){

    // displayData should hold the data which is visualized
    this.displayData = this.filterAndAggregate(_filterFunction);

    //// you might be able to pass some options,
    //// if you don't pass options -- set the default options
    //// the default is: var options = {filter: function(){return true;} }
    //var options = _options || {filter: function(){return true;}};





}



/**
 * the drawing function - should use the D3 selection, enter, exit
 */
AgeVis.prototype.updateVis = function(){

    // Dear JS hipster,
    // you might be able to pass some options as parameter _option
    // But it's not needed to solve the task.
    // var options = _options || {};


    // TODO: implement...
    // TODO: ...update scales
    // TODO: ...update graphs
    // updates scales
    var ran = d3.range(101); 
    ran.reverse();
    this.x.domain(d3.extent(this.displayData, function(d) { return d; }));
    this.y.domain(d3.extent(d3.range(101), function(d, i) { return ran[i]; }));

    // updates axis
    // this.svg.select(".x.axis")
    //     .call(this.xAxis);

    this.svg.select(".y.axis")
        .call(this.yAxis)

    // updates graph
    var path = this.svg.selectAll(".area")
      .data([this.displayData])

    path.enter()
      .append("path")
      .attr("class", "area");

    path
      .transition()
      .attr("d", this.area)
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    path.exit()
      .remove();

    // this.brush.x(this.x);
    // this.svg.select(".brush")
    //     .call(this.brush)
    //   .selectAll("rect")
    //     .attr("height", this.height);

}


/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
var newSelectionStart;
AgeVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){

    // TODO: call wrangle function
    
    newSelectionStart = selectionStart;
    newSelectionEnd = selectionEnd;
    this.wrangleData(null); 
    this.updateVis();


}


/*
*
* ==================================
* From here on only HELPER functions
* ==================================
*
* */



/**
 * The aggregate function that creates the counts for each age for a given filter.
 * @param _filter - A filter can be, e.g.,  a function that is only true for data of a given time range
 * @returns {Array|*}
 */
var dateFormat = d3.time.format("%Y-%m-%d");
AgeVis.prototype.filterAndAggregate = function(_filter){


    // Set filter to a function that accepts all items
    // ONLY if the parameter _filter is NOT null use this parameter
    var filter = function(){return true;}
    if (_filter != null){
        filter = _filter;
    }
    //Dear JS hipster, a more hip variant of this construct would be:
    // var filter = _filter || function(){return true;}

    var that = this;

    // create an array of values for age 0-100
    res = d3.range(100).map(function () {
        return 0;
    });


    // accumulate all values that fulfill the filter criterion

    // TODO: implement the function that filters the data and sums the values

    compareDates = function(limit, current) {
        limitYear = limit.getFullYear();
        limitMonth = limit.getMonth();
        limitDate = limit.getDate();
        currentYear = parseInt(current.charAt(0)+current.charAt(1)+current.charAt(2)+current.charAt(3))
        currentMonth = parseInt(current.charAt(5)+current.charAt(6)) - 1;
        currentDate = parseInt(current.charAt(8)+current.charAt(9));
        if (limitYear > currentYear) {return false}
        else if (limitMonth > currentMonth) {return false}
        else if (limitDate > currentDate) {return false}
        else {return true}
    }

    if (typeof newSelectionStart == 'undefined') {
        newSelectionStart = new Date(Date.parse("December 1, 2012"));
        newSelectionEnd = new Date(Date.parse("December 31, 2013"));
    }

    // for each age on y-axis
    res.forEach(function(c, h) {
        // we look at each day of votes
        mainData.forEach(function(d, i) {
          
            // see that the day is in range
            if (compareDates(newSelectionStart,d.day) && !compareDates(newSelectionEnd,d.day)) {
                // for each age that voted that day, check if we're currently concerned about that age and the add if applicable
                d.age.forEach(function(e,j) {
                    if (e.age == h) {
                     
                        res[h] += e["count(*)"];

                    }
                })
            }
            
        });
});

    newRes = res;
    
    return res;

}