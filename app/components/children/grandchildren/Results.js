// Include React
var React = require("react");
var axios = require("axios");


// Create the Child Component
var Results = React.createClass({

	// Here we set a generic state associated with the article being saved
	getInitialState: function() {
		return { title: "", url: "", date: "" };
	},

	// When a user saves an article
	handleSave: function(articleTitle, articleUrl, articleDate) {
		// prevent the HTML from trying to submit a form if the user hits "Enter" instead of
		// clicking the button
		//event.preventDefault();

		// Set the parent to have the search term
		//this.props.setTitle(this.state.term);
		//this.setState({ term: "" });
		//this.setState({ term: event.target.value });
		this.setState({ title: articleTitle, url: articleUrl, date: articleDate });
		console.log("aaargh ", articleTitle);
		this.props.setArticle(articleTitle, articleUrl, articleDate);
		
	},


	render: function() {

		//console.log("in Results ! ", this.props);

		var articles = [ '0' ];

		if (this.props.length != 0) {
  			articles = this.props.results;
  		}

		console.log("works? ",articles);


		if (this.props.results.length !=0){

		    return (

		    	<div className="col-lg-12">
			        <div className="panel panel-success">
			          <div className="panel-heading">
			            <h3 className="panel-title">Results</h3>
			          </div>
			          <div className="panel-body">

			          	<div className="panel panel-default">
						    <div className="panel-body">
						       {articles[0].headline.main}
						       <a value={articles[0].headline.main} onClick={() => this.handleSave(articles[0].headline.main, articles[0].web_url, articles[0].pub_date )} className="btn btn-success btn-sm btn-save">Save</a>
						    </div>
						</div>

						<div className="panel panel-default">
						    <div className="panel-body">
						       {articles[1].headline.main}
						       <a onClick={() => this.handleSave(articles[1].headline.main)} className="btn btn-success btn-sm btn-save">Save</a>
						    </div>
						</div>

			          	<div className="panel panel-default">
						    <div className="panel-body">
						       {articles[2].headline.main}
						       <a onClick={() => this.handleSave(articles[2].headline.main)} className="btn btn-success btn-sm btn-save">Save</a>
						    </div>
						</div>

						<div className="panel panel-default">
						    <div className="panel-body">
						       {articles[3].headline.main}
						       <a onClick={() => this.handleSave(articles[3].headline.main)} className="btn btn-success btn-sm btn-save">Save</a>
						    </div>
						</div>

						<div className="panel panel-default">
						    <div className="panel-body">
						       {articles[4].headline.main}
						       <a onClick={() => this.handleSave(articles[4].headline.main)} className="btn btn-success btn-sm btn-save">Save</a>
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
module.exports = Results;