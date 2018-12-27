const express = require('express');
const exphbs = require('express-handlebars');
const express_handlebars_sections = require('express-handlebars-sections');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const wnumb = require('wnumb');

const homeController = require('./controllers/homeController'),
      accountController = require('./controllers/accountController'),
      shopController = require('./controllers/shopController'),
      cartController = require('./controllers/cartController');

const handleLayout = require('./middle-wares/handleLayout');


const app = express();
const port = 3000;

app.engine('hbs', exphbs({
    defaultLayout: 'index',
    layoutsDir: 'views/_home/',
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'dmt',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleLayout);

app.get('/home', (req, res) => {
    res.redirect('/');
});
app.get('/index', (req, res) => {
    res.redirect('/');
});

app.use('/', homeController);
app.use('/account', accountController);
app.use('/shop', shopController);
app.use('/cart', cartController);

app.listen(port, () => {
    console.log("Running on port " + port);
});