import configViewEngine from './config/viewEngine';
import initWebRouter from './routers/web';
import express from 'express';
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRouter(app);

app.listen(PORT, () => {
  console.log('>>> JWT Backend is running on the port: ' + PORT);
});
