// Include React
var React = require("react");

// Include the momentJS library
var moment = require("moment");

// Create the Child Component
var Saved = React.createClass({
  render: function() {

    var saved = [ '0' ];

    if (this.props.length != 0) {
        saved = this.props.savedArticles;
      }

    console.log("saved works? ", saved);

    // moment.unix(value).format("MM/DD/YYYY");


    if (this.props.savedArticles.length !=0) {

      return (

        <div className="col-lg-12">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              <div className="panel panel-default">
                <div className="panel-body">
                  {saved[0].title}
                  <span className="date">Article Date: {saved.date}</span>
                  <a className="btn btn-success btn-sm btn-save">Remove</a>
                  <div className="panel panel-notes">
                    Notes: will go here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );

    }
    else {

      return (
        <div></div>
        );

    }  
  }
});

// Export the component back for use in other files
module.exports = Saved;      