/* eslint-disable @typescript-eslint/no-var-requires */
import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import connectDB from './config/dbconnect';
import indexRouter from './controllers/index';
import usersRouter from './controllers/users';
import ranksRouter from './controllers/rankings';
import gamesRouter from './controllers/games';

connectDB();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rankings', ranksRouter);
app.use('/games', gamesRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
	console.log(req.url);
	next(createError(404));
});

// error handler
app.use(function (
	err: HttpError,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

export default app;
