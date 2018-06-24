const model = require ('../server/modeles');
var fs = require ('fs')

var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
};

module.exports = (route, dirname, passport) => {
	route.get('/caca', (req, res) => {
			console.log('coucou');
			var html = fs.readFileSync('./public/caca.html', 'utf8');
			res.send(html);
	});

	route.get('/', (req, res) =>{
				res.type('.html');
				res.sendFile(dirname + '/public/indexs.html');
	});
	route.get('/film', (req, res) =>{
				res.type('.html');
				res.sendFile(dirname + '/public/films.html');
	});
	route.post('/add', (req, res) =>{
		res.redirect('/caca');
	});
	route.post('/redirect', (req, res) =>{
		console.log('je passe la');
		res.redirect('/');
	});
	route.post('/login', passport.authenticate('login', {
		successRedirect: '/film',
		failureFlash : true  
	}));

	route.get('/register', (req, res)=>{
			res.sendFile(dirname + '/public/register.html');
	});
	route.post('/register', passport.authenticate('signup', {
		successRedirect: '/film',
		failureRedirect: '/',
		failureFlash : true  
	}));
}

