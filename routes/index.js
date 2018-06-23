var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
};

module.exports = (route, dirname, passport) => {
	route.get('/caca', (req, res) => {
			console.log('coucou');
			res.type('.html');
			res.sendFile(dirname + '/public/caca.html');
	});

	route.get('/', (req, res) =>{
				res.type('.html');
				res.sendFile(dirname + '/public/indexs.html');
	});
	route.post('/add', (req, res) =>{
		res.redirect('/caca');
	});
	route.post('/redirect', (req, res) =>{
		console.log('je passe la');
		res.redirect('/');
	});
	route.post('/login', passport.authenticate('login', {
		successRedirect: '/',
		failureFlash : true  
	}));

	route.get('/register', (req, res)=>{
			res.sendFile(dirname + '/public/register.html');
	});
	route.post('/register', passport.authenticate('signup', {
		successRedirect: '/',
		failureRedirect: '/',
		failureFlash : true  
	}));
}

