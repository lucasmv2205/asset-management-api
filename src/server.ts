import express from 'express';
import db from './database/connect'

import routes from './routes'

db.on('error', console.log.bind(console, 'connect error'))
db.once('open', () => {
  console.log('connect successfuly')
})

const app = express();
app.use(express.json())
routes(app)


app.listen(3000, () => console.log("Server is running"));