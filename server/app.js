const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT ?? 3001;
const app = express();


const indexRouter = require('./routes/indexRouter');
const gameRouter = require('./routes/gameRouter');


app.use(cors(
  {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
  }
));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', indexRouter);
app.use('/question', gameRouter);

app.listen(PORT, () => {
  console.log('Port is started');
});