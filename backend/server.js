const express = require('express');
const app = express();
const apiRouter = require('./apiRouter');

app.use(({ method, url }, res, next) => {
  console.log(method, url);
  next();
});

app.use(express.json());

app.use('/api', apiRouter);

app.listen(3001, () => console.log('listening on 3001'));
