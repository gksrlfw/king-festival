import { FindOperator } from 'typeorm';
import { Country } from '@src/module/festival/vo/country';
import { CountryNameEnum } from '@src/module/festival/dto/country-name.enum';

/**
 * Country 을 변환합니다.
 */
export const CountryTransformer = {
  // database 에 입력할 때
  to(value: Country | FindOperator<any>): string | FindOperator<any> {
    if (value) {
      return value.toString();
    }
    return null;
  },
  // database 에서 조회할 때
  from(value: string): Country {
    const response = new Country(CountryNameEnum[value]);
    if (response instanceof Country) {
      return response;
    }

    return null;
  },
};
