import { Country } from '@src/module/festival/vo/country';
import { CountryNameEnum } from '@src/module/festival/dto/country-name.enum';

describe('Country 테스트', () => {
  let country: Country;
  beforeEach(() => {
    country = new Country(CountryNameEnum.KOREA);
  });

  it('toString 테스트', () => {
    const result = country.toString();

    expect(result).toEqual('KOREA');
  });
});
