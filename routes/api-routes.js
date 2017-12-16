var db = require('../models');


module.exports = function(app) {

//login route




//associate route

//console.log("outside",req.user);
	// app.get("/api/:id/packages", function(req, res) {
	// 	//joins

	// 	console.log("inside",req.user);

// app.get("/api/packages", function(req, res) {
	// console.log(req.User)


app.get("/api/packages/associate", function(req, res) {
		//joins
		db.Package.findAll({
			include: [
				{
					model: db.User, 
						include: [
					 		{
					 			model: db.UserInfo
					 		}
					 	]
				}
			]
		}).then(function(dbPackage) {
			//res.json(dbPackage);
    		res.render("index", {'dbPackage':dbPackage});
		})
	})
}