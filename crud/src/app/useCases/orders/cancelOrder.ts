import {type Request, type Response} from 'express';
import {Order} from '../../models/Order';

export async function cancelOrder(request: Request, res: Response) {
  try {
    const {orderId} = request.params;
    await Order.findByIdAndDelete(orderId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
