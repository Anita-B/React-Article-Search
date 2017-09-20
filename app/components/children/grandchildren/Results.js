// Include React
var React = require("react");


// Create the Child Component
var Results = React.createClass({
  render: function() {
    return (

    	<div className="col-lg-12">
	        <div className="panel panel-success">
	          <div className="panel-heading">
	            <h3 className="panel-title">Results</h3>
	          </div>
	          <div className="panel-body">
	            <div className="panel panel-default">
	              <div className="panel-body">
	                Article Title Goes Here
	                <a className="btn btn-success btn-sm btn-save">Save</a>
	              </div>
	            </div>
	          </div>
	        </div>
	    </div>

   	);
  }
});

// Export the component back for use in other files
module.exports = Results;