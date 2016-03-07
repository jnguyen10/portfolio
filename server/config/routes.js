module.exports = function(app){
	var users = require('./../controllers/users.js');

	// ########### USERS #############
	// ADD A NEW USER
	app.post('/users/register', function(req, res){
		users.register(req, res);
	})

	// LOGIN USER
	app.post('/users/login', function(req, res){
		users.login(req, res);
	})

	// LOGOUT USER
	app.get('/users/logout', function(req, res){
		users.logout(req, res);
	})

	// GET USER LOGIN STATUS
	app.get('/users/auth/status', function(req, res){
		users.getStatus(req, res);
	})

};