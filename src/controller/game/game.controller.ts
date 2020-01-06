
/*
 * @Author: leowangheng@tencent.com
 * @Date: 2020-01-05 14:28:42
 * @Last Modified by: leo
 * @Last Modified time: 2020-01-06 20:28:36
 * 剪刀石头布游戏
 */

import { Controller, Get, Render } from '@nestjs/common';
import { GameService } from 'src/service/game/game.service';
import { Sleep } from '../../utils/utils';

@Controller('/game')
export class GameController {
  constructor(private readonly gameService: GameService) {}
  /**
   * name
   */
  @Get()
  @Render('game/index')
  getComputerAction() {
    return {
      message: 'test',
    };
  }

  @Get('/start')
  async startGame() {
    await Sleep(1000);
    return this.gameService.startMoraGame();
  }
}
