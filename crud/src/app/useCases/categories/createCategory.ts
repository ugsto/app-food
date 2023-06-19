import {type Request, type Response} from 'express';
import {Category} from '../../models/Category';

export async function createCategory(request: Request, res: Response) {
  try {
    // Res.send('Ok post category');
    const {icon, name} = request.body;
    const category = await Category.create({icon, name});
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
