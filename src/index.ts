import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import dayOne from './days/one/day-one';
import dayTwo from './days/two/day-two';

const app = new Koa();
app.use(bodyParser());
app.use(logger());

app.use(dayOne.routes());
app.use(dayTwo.routes());

console.log('starting server on :3000');
app.listen(3000);
