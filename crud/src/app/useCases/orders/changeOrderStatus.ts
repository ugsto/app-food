import {type Request, type Response} from 'express';
import {Order} from '../../models/Order';

export async function changeOrderStatus(request: Request, res: Response) {
  try {
    const {orderId} = request.params;
    const {status} = request.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE',
      });
    }

    await Order.findByIdAndUpdate(orderId, {status});
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
