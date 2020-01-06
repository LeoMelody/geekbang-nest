import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrderController } from './controller/order.controller';
import { AppService } from './app.service';
import { OrderService } from './service/order.service';
import { OrderListController } from './controller/order.list.controller';
import { GameModule } from './controller/game/game.module';

@Module({
  imports: [GameModule],
  controllers: [AppController, OrderController, OrderListController],
  providers: [AppService, OrderService],
})
export class AppModule {}
