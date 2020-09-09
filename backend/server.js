const express = require('express');
const app = express();
const api = require('./apiRoute');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use('/api', api);

app.listen(3001, () => console.log('listening on 3001'));
