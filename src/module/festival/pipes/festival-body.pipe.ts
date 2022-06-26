import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { FestivalBody } from '@src/module/festival/dto/festival.body';
import { Country } from '@src/module/festival/vo/country';
import * as dayjs from 'dayjs';

@Injectable()
export class FestivalBodyPipe implements PipeTransform {
  /**
   * country 는 실제 string 으로 들어옵니다. Country 로 변환합니다.
   * @param value
   * @param metadata
   */
  transform(value: FestivalBody, metadata: ArgumentMetadata) {
    if (typeof value.country === 'string') {
      value.country = new Country(value.country);
    }

    value.endAt = dayjs(value.endAt);
    value.startAt = dayjs(value.startAt);
    return value;
  }
}
