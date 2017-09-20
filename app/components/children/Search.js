// Include React
var React = require("react");

var Results = require("./grandchildren/Results");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Create the Child Component
var Search = React.createClass({

  // Here we set a generic state associated with the articles being searched for
  getInitialState: function() {
    return { topic: "", startYear: 0, endYear: 0, results: [] };
  },

  componentDidUpdate: function() {

    // //Run the query for the address
    // helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
    //   if (data !== this.state.results) {
    //     console.log("NYTIMES data: ", data);
    //     this.setState({ results: data });

        // // After we've received the result... then post the search term to our history.
        // helpers.postHistory(this.state.searchTerm).then(function() {
        //   console.log("Updated!");

        // After we've received the result... display it in results granchild

          // // After we've done the post... then get the updated history
          // helpers.getHistory().then(function(response) {
          //   console.log("Current History", response.data);

          //   console.log("History", response.data);

          //   this.setState({ history: response.data });

          // }.bind(this));
      //   }.bind(this));
    //     }
    //   }.bind(this));
  },

  // This function will respond to the user input
  handleTopicChange: function(event) {

    this.setState({ topic: event.target.value });

  },
  // This function will respond to the user input
  handleYearStartChange: function(event) {

    this.setState({ startYear: event.target.value });

  },
  // This function will respond to the user input
  handleYearEndChange: function(event) {

    this.setState({ endYear: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search topic
    this.props.setSearch(this.state.topic, this.state.startYear, this.state.endYear);
    this.setState({ topic: "", startYear: 0, endYear: 0 });

    helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
        console.log("NYTIMES data: ", data);
        this.setState({ results: data });
        }
      }.bind(this));

  },

  // Here we describe this component's render method
  render: function() {
    return (
        <div>
          <div className="col-lg-12">
            <div className="panel panel-success">

              <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
              </div>

              <div className="panel-body">

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Topic</label>
                      <input id="topic" value={this.state.topic} onChange={this.handleTopicChange} type="text" className="form-control" placeholder="Topic" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="example-number-input" className="col-2 col-form-label">Start Year</label>
                      <div className="col-10">
                        <input id="yearStart" value={this.state.yearStart} onChange={this.handleYearStartChange} className="form-control" type="number" placeholder="2017" />
                      </div>
                  </div>

                  <div className="form-group">
                      <label htmlFor="example-number-input" className="col-2 col-form-label">End Year</label>
                      <div className="col-10">
                        <input id="yearEnd" value={this.state.yearEnd} onChange={this.handleYearEndChange} className="form-control" type="number" placeholder="2017" />
                      </div>
                  </div>
                  <button type="submit" onClick="" className="btn btn-success">Search</button>
                </form>

              </div>

            </div>
          </div> 

          <Results results={this.state.results}/>

      </div>         

    );
  }
});

// Export the component back for use in other files
module.exports = Search;