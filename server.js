const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create( { helpers });

const sess = {
  secret: 'ribbon kolidoscope',
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 386400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get("/", function(req, res) {
  res.json(path.join(__dirname,"views/lessonscheduleview.handlebars"))
})


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));
});
