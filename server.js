//set up server
var gpio = require('pi-gpio');
function doorLock(value) {
	gpio.open(16, "output", function(err) {
		if (value == '1') {
			gpio.write(16, 1, function() {
				gpio.close(16);
			}
		} else {
			gpio.write(16, 0, function() {
				gpio.close(16);
			}
		}
};





var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	console.log('Middleware');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'it works'});
});

router.route('/util') 
	.post(function(req, res) {
		var postVal = req.body.value;
		doorLock(postVal);
	res.json({ message: 'value recieved'});
	})
	
	.get(function(req, res) {
		var getVal = "placeholder";
		res.json({ value: getVal });
	});



app.use('/api', router);

app.listen(port);
console.log('Port ' + port);

