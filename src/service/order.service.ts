import { Injectable } from '@nestjs/common';
import { Order } from '../entity/Order';

@Injectable()
export class OrderService {
  getOrderDetail(): Order {
    return {
      orderId: '123',
    };
  }
}
