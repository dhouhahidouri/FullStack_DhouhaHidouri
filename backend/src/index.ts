import express from 'express';
import cors from 'cors';
import productRoutes from './routes/products';

const app = express();
app.use(cors());
app.use('/api', productRoutes);

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
