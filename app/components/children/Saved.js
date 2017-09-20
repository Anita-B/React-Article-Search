// Include React
var React = require("react");


// Create the Child Component
var Saved = React.createClass({
  render: function() {
    return (

      <div className="col-lg-12">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">Saved Articles</h3>
          </div>
          <div className="panel-body">
            <div className="panel panel-default">
              <div className="panel-body">
                Article Title Goes Here
                <span className="date">Date Saved: 10/14/15</span>
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
});

// Export the component back for use in other files
module.exports = Saved;      