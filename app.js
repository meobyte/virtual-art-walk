const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

// set up handlebars view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// static middleware for assets
app.use(express.static(`${__dirname}/public`));

// index page
app.get('/', (req, res) => {
  res.render('index');
});

// custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use((err, req, res) => {
  console.error(err.stack); // eslint-disable-line no-console
  res.status(500);
  res.render('500');
});

// setup server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`Express started on http://localhost:${app.get('port')} - press Ctrl-C to terminate.`); // eslint-disable-line no-console
});
