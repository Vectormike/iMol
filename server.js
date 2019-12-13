import app from './server/app';
import chalk from 'chalk';

import createDebug from 'debug';

import morgan from 'morgan';

const debug = createDebug('app');

// Middlewares
app.use(morgan('dev'));

const port = 7000;

app.listen(port, () => debug(`Server running on port ${chalk.green(port)}`));
