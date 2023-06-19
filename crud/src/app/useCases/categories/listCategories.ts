import {type Request, type Response} from 'express';
import {Category} from '../../models/Category';

export async function listCategories(request: Request, res: Response) {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
