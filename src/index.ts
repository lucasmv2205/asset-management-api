import express from 'express';
import db from './database/connect'
import SwaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger.json'

import routes from './routes'
import { assert } from 'console';

db.on('error', console.log.bind(console, 'connect error'))
db.once('open', () => {
  console.log('connect successfuly')
})

const app = express();
app.use(express.json())
app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile))
routes(app)


app.listen(3333, () => console.log("Server is running on port 3333"));