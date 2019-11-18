import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({
    hello: 'Aliens',
  });
});

export default routes;
