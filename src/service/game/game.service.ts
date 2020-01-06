import { Injectable } from '@nestjs/common';
import { Game } from '../../entity/game/Game';

/*
 * @Author: leowangheng@tencent.com
 * @Date: 2020-01-05 14:33:28
 * @Last Modified by: leo
 * @Last Modified time: 2020-01-05 16:15:34
 * 游戏服务层: 石头剪刀布游戏
 */

@Injectable()
export class GameService {
  getComputerService(): string {
    const types: string[] = ['rock', 'scissors', 'paper'];
    const current: number = Math.floor(Math.random() * 3);
    return types[current];
  }

  startMoraGame(): Game {
    const types: string[] = ['rock', 'scissors', 'paper'];
    const player: string = types[Math.floor(Math.random() * 3)];
    const computer: string = types[Math.floor(Math.random() * 3)];
    return {
      player,
      computer,
    };
  }
}
