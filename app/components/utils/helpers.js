// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// New York Times API
//var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
//var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
//var authKey = "55ce213092e844789c686de9515f0132";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  //runQuery: function(topic, startYear, endYear) {

    // console.log(topic);
    // console.log(startYear);
    // console.log(endYear);

    // Figure out the geolocation
    //var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101";
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + topic;

    // axios.get(queryURL).then( nytdata => {

    //   const docs = nytdata.data.response.docs;

    //   //console.log(docs);

    //   return docs;
    // });
    // console.log(queryURL)
    // return axios.get(queryURL).then(function(NYTData) {
      //console.log(NYTData.data.response.docs[0].headline.main);
      // If get get a result, return that result's formatted address property
      // for (var i = 0; i < 5; i++) {
      //   //console.log("Here1");
      //   //console.log(NYTData.data.response.docs[i].headline.main);
      //   if (NYTData.data.response.docs[i].headline.main) 
      //   { 
      //     //console.log("Here2");
      //     //console.log(NYTData.data.response.docs[i].headline.main);
      //     //return response.data.results[0].formatted;
      //   }
      // }
      // If we don't get any results, return an empty string
      //return "";
    //});
  //},

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postArticles: function(title, url, date) {
    console.log("got to postArticles in helpers.js");
    return axios.post("/api", { articleTitle: title, articleUrl: url, articleDate: date });
  }
};

// We export the API helper
module.exports = helper;
