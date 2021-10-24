const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const path = require('path');

app.use(bodyParser.json({ 'limit': '10mb' }));
app.use(bodyParser.urlencoded({ 'extended': false }));

app.engine('hbs', hbs({
    'extname': 'hbs',
    'defaultLayout': 'index',
    'layoutsDir': `${__dirname}/views/`
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(3000);
console.log('Server is listening at port 3000');

const url = require('./routes');
app.use('/', url);

module.exports = app;