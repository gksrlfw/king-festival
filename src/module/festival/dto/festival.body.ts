import { FestivalResponse } from '@src/module/festival/dto/festival.response';

/**
 *
 */
export class FestivalBody extends FestivalResponse {
  /**
   *
   */
  toString(): string {
    return JSON.stringify(this);
  }
}
