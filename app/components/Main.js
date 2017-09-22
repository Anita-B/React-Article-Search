// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Saved = require("./children/Saved");
var Search = require("./children/Search");

// Creating the Main component
var Main = React.createClass({


  getInitialState: function() {
    //return { topic: "", startYear: 0, endYear: 0, results: [], savedArticle: "", savedArticleUrl: "", savedArticleDate: "", savedArticles: [] };
    return { savedArticle: "", savedArticleUrl: "", savedArticleDate: "", savedArticles: [] };
  },

  //The moment the page renders get the History
  componentDidMount: function() {
    //Get the latest history.
    // helpers.getHistory().then(function(response) {
    //   console.log(response);
    //   if (response !== this.state.history) {
    //     console.log("History", response.data);
    //     this.setState({ history: response.data });
    //   }
    // }.bind(this));
  },

  //If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    //Run the query for the address
    // helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
    //   if (data !== this.state.results) {
    //     console.log("data: ", data);
    //     this.setState({ results: data });
//console.log("In helpers.postArticles in Main1");
    // After we've received the result... then post the search term to our history.

    if (this.savedArticle !== ""){
      helpers.postArticles(this.state.savedArticle, this.state.savedArticleUrl, this.state.savedArticleDate).then(function() {
        console.log("In helpers.postArticles in Main");

        // After we've done the post... then get the updated history
        helpers.getArticles().then(function(response) {

          console.log("Articles", response.data);

          this.setState({ savedArticle: "", savedArticleUrl: "", savedArticleDate: "", savedArticles: response.data });

          //, function () {
      //     console.log("in getArticles in Main ", this.savedArticles);
      // });

        }.bind(this));
      }.bind(this));
    }
    //}
  //}.bind(this));

  },

  // This function allows childrens to update the parent.
  // setSearch: function(topic, startYear, endYear) {
  //   this.setState({ topic: topic, startYear: startYear, endYear: endYear });
  //   console.log("Topic: ", topic);
  //   console.log("startYear: ", startYear);
  //   console.log("endYear: ", endYear);
  //   //console.log("results: ", results);
  // },

  // This function allows childrens to update the parent.
  setArticle: function(title, url, date) {
    //this.setState({ searchTerm: term });
    this.setState({ savedArticle: title, savedArticleUrl: url, savedArticleDate: date });
    // this.setState({ savedArticle: title }, function () {
    //     console.log("in setArticle in Main ", this.state);
    // });
    
    // console.log(savedArticleUrl);
    // console.log(savedArticleDate);
  },

  // Here we render the function
  render: function() {
    return (

      <div className="container">

        <div className="jumbotron">
          <h2><strong>New York Times Article Scrubber</strong></h2>
          <p>Search for and annotate articles of interest</p>
        </div>


        <div className="row">
          <Search setSearch={this.setSearch} setArticle={this.setArticle} />
        </div>

        <div className="row">
          <Saved savedArticles={this.state.savedArticles} />
        </div>

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;