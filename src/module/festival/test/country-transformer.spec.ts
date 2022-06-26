import { Country } from '@src/module/festival/vo/country';
import { CountryNameEnum } from '@src/module/festival/dto/country-name.enum';
import { CountryTransformer } from '@src/module/festival/entities/transformer/country.transformer';

describe('CountryTransformer 테스트', () => {
  it('to: string 으로 변환합니다.', () => {
    const country = new Country(CountryNameEnum.KOREA);

    const result = CountryTransformer.to(country);

    expect(result).toEqual('KOREA');
  });

  it('from: Country 인스턴스로 변환합니다.', () => {
    const result = CountryTransformer.from('KOREA');

    expect(result).toBeInstanceOf(Country);
  });
});
