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

const authMiddleware = require('./middlewares/auth');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', authMiddleware, moviesRouter);
app.use('/shows', authMiddleware, showsRouter);
app.use('/actors', authMiddleware, actorsRouter);
app.use('/directors', authMiddleware, directorsRouter);

// Catch 404 error.
app.use((req, res) => res.status(404).json({ error: 'Endpoint not found' }));

app.listen(port, () => console.log(`Server listening on PORT ${port}`));