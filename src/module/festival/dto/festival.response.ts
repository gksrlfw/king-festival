import { Country } from '@src/module/festival/vo/country';
import * as dayjs from 'dayjs';
import { IsNotEmpty, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { DayjsTransformer } from '@src/common/class-transformer/dayjs.transformer';

/**
 *
 */
export class FestivalResponse {
  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Country)
  country: Country;

  // fixme. locale ??
  @Type(() => dayjs)
  // @DayjsTransformer()
  startAt: dayjs.Dayjs;

  @Type(() => dayjs)
  // @DayjsTransformer()
  endAt: dayjs.Dayjs;
}
