import { Controller, Get } from '@nestjs/common';
import { Order } from '../entity/Order';
import { OrderService } from '../service/order.service';

@Controller('/order/list')
export class OrderListController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrderDetail(): Order[] {
    return [this.orderService.getOrderDetail()];
  }
}
