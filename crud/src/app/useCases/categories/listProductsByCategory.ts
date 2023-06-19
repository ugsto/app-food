import {type Request, type Response} from 'express';
import {Product} from '../../models/Product';

export async function listProductsByCategory(request: Request, res: Response) {
  try {
    const {categoryId} = request.params;

    const products = await Product.find()
      .where('category')
      .equals(categoryId);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
