import express from 'express';
import homeController from '../controller/homeController';
const router = express.Router();

const initWebRouter = (app) => {
  router.get('/', (req, res) => {
    return res.send('Hello World');
  });

  router.get('/user', homeController.handleUserPage);
  router.post('/users/create-user', homeController.handleCreateNewUser);

  return app.use('/', router);
};

export default initWebRouter;
