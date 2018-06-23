
module.exports = (route) => {
	route.get('/caca', (req, res) => {
			console.log('coucou');
			res.type('.html');
			res.sendFile(__dirname + '/public/caca.html');
	});

	route.get('/', (req, res) =>{
				console.log('coucou');
				res.type('.html');
				res.sendFile(__dirname + '/public/indexs.html');
	});

}
