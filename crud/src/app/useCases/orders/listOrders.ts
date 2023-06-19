import {type Request, type Response} from 'express';
import {Order} from '../../models/Order';

export async function listOrders(request: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({creatAt: 1})
      .populate('products.product');

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
