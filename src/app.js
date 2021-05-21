require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const showsRouter = require('./routes/shows');
const actorsRouter = require('./routes/actors');
const directorsRouter = require('./routes/directors');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/shows', showsRouter);
app.use('/actors', actorsRouter);
app.use('/directors', directorsRouter);

app.listen(port, () => console.log(`Server listening on PORT ${port}`));