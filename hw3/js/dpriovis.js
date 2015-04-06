/**
 * Created by Hendrik Strobelt (hendrik.strobelt.com) on 1/28/15.
 */


//TODO: DO IT ! :) Look at agevis.js for a useful structure

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
 var firstTime = true;
PrioVis = function(_parentElement, _data, _metaData){
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
PrioVis.prototype.initVis = function(){

    var that = this; // read about the this


    //TODO: construct or select SVG
    //TODO: create axis and scales

    // constructs SVG layout
    this.svg = this.parentElement.append("svg")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top + this.margin.bottom)
        .attr("class", "lightcoral")
      .append("g")
        .attr("transform", "translate(" + this.margin.left + "," + "-45)");

    this.y = d3.scale.linear()
      .range([this.height, 0]);

    this.x = d3.scale.ordinal()
      .rangeRoundBands([0, this.width], .1);

    this.color = d3.scale.category20();

    this.yAxis = d3.svg.axis()
      .scale(this.y)
      .ticks(12)
      .orient("left");

    this.xAxis = d3.svg.axis()
      .scale(this.x)
      .orient("left");

    // Add axes visual elements
    this.svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(0," + /*this.height*/50 + ")");
     


    // filter, aggregate, modify data
    this.wrangleData(null);

    // call the update method
    this.updateVis();
}


/**
 * Method to wrangle the data. In this case it takes an options object
 * @param _filterFunction - a function that filters data or "null" if none
 */
PrioVis.prototype.wrangleData = function(_filterFunction){

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
PrioVis.prototype.doesLabelFit = function(datum, label) {
      var pixel_per_character = 6;  // obviously a (rough) approximation

      return true;//return datum.type.length * pixel_per_character < this.x(datum.count);
    }

PrioVis.prototype.updateVis = function(){
    var that = this;


    // updates scales
    this.y.domain(d3.extent(this.displayData, function(d) {return d; }));
    this.x.domain(this.displayData.map(function(d) { return d; }));
    this.color.domain(this.displayData.map(function(d,i) { return i; }));
   
    // updates axis
    this.svg.select(".y.axis")
        .call(this.yAxis);

    // updates graph

    // Data join
    var bar = this.svg.selectAll(".bar")
      .data(this.displayData, function(d) {return d; });

    // Append new bar groups, if required
    var bar_enter = bar.enter().append("g");

    // Append a rect and a text only for the Enter set (new g)
    bar_enter.append("rect");
    bar_enter.append("text");

    // Add click interactivity
    bar_enter.on("click", function(d) {
       $(that.eventHandler).trigger("selectionChanged", d.type);
    })
   
    // Add attributes (position) to all bars
    bar
      .attr("class", "bar");
      // .transition()
      // .attr("transform", function(d, i) { return "translate(0," + 0/*that.y(d.type)*/ + ")"; })

    // Remove the extra bars
    bar.exit()
      .remove();

    // Update all inner rects and texts (both update and enter sets)

    bar.select("rect")
      .attr("x", function(d,i) {return 7+i*34})
      .attr("y", function(d) {return that.y(d)+51})
      .attr("height", /*this.y.rangeBand()*/function(d,i){return that.height-that.y(d)})
      .style("fill", function(d,i) {
        return that.color(d);
      })
      .transition()
      .attr("width", function(d, i) {
          return /*that.x(d.count);*/34
      });


    var qualData = ["CLIM","ROAD","SUPP","SANI","HEAL","EDUC","GOVT","INET","ENER","FOOD","RIVR","CRIM","FREE","PERS","EQUA","JOBS"];

    bar.select("text")
      .transition()
      .attr("x", function(d, i) { return 45+i*69/*that.x(d.count) + (that.doesLabelFit(d) ? -3 : 5);*/ })
      .attr("y", function(d,i) { return 410/*that.y.rangeBand() / 2;*/ })
      .text(function(d, i) { if (i<15) {return qualData[i]}else {return qualData[i-15]}})
      .attr("class", "type-label")
      .attr("dy", ".35em")
      .attr("text-anchor", function(d) { return /*that.doesLabelFit(d) ? "end" : "start";*/ "end" })
      .attr("fill", function(d) { return /*that.doesLabelFit(d) ? "white" : "black";*/ "black" });
     //  .attr("transform", function(d, i) {
     //     return "rotate(-65)"; 
     // });
}



/**
 * Gets called by event handler and should create new aggregated data
 * aggregation is done by the function "aggregate(filter)". Filter has to
 * be defined here.
 * @param selection
 */
PrioVis.prototype.onSelectionChange= function (selectionStart, selectionEnd){

    // TODO: call wrangle function
    prioSelectionStart = selectionStart;
    prioSelectionEnd = selectionEnd;
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
PrioVis.prototype.filterAndAggregate = function(_filter){


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
    bins = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


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

    if (typeof prioSelectionStart == 'undefined') {
        prioSelectionStart = new Date(Date.parse("December 1, 2012"));
        prioSelectionEnd = new Date(Date.parse("December 31, 2013"));
    }

    //for each day of votes
    mainData.forEach(function(d, i) {
      // for each bin (priority)
      bins.forEach(function(c, h) {

    
      
    

        // if date is in range
        if (compareDates(prioSelectionStart,d.day) && !compareDates(prioSelectionEnd,d.day)) {
          
        bins[h] += d["sum(p" + h + ")"];

                }
            })
        }
   
    );


   if (firstTime) {
    tempBins = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    tempBins.forEach(function(d, i) {
      if (i % 2 ==0) {
        tempBins[i] = bins[i/2]
      } 
      else {
        tempBins[i] = tempBins[i-1]
      }
    })
    firstTime = false;
  } else {
    
    tempBins.forEach(function(d, i) {
      if (i % 2 ==0) {
        tempBins[i] = bins[i/2]
      } 
      // else {
      //   tempBins[i] = tempBins[i-1]
      // }
    })
  }
    bins = tempBins;
   
    return bins;
}