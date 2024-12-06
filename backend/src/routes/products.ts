import { Router, Request, Response } from 'express';
import products from '../data/products.json';

const router = Router();

router.get('/products', (req: Request, res: Response) => {
    res.json(products);
  });
  
  router.get('/products/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  });

export default router;
