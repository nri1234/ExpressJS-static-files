var express = require('express');
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('assets'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/assest/index.html');
});

app.get('/userform', function (req, res) {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(response);
});

app.listen(3000);
