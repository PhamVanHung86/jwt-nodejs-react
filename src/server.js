import configViewEngine from './config/viewEngine';
import initWebRouter from './routers/web';
import express from 'express';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

initWebRouter(app);

app.listen(PORT, () => {
  console.log('>>> JWT Backend is running on the port: ' + PORT);
});
