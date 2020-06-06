import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import { cloudinaryConfig } from '../config/cloudinary';

/**
 * Express instance
 * @public
 */
const app = express();

app.use(cors());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', cloudinaryConfig);
app.use('/test', (req, res) => res.send('Working!'));

// Use Routes
import products from '../api/routes/products';
import users from '../api/routes/auth';
import uploads from '../api/routes/uploads';
app.use('/api/products/', products);
app.use('/api/auth/', users);
app.use('/api/uploads/', uploads);

export default app;
