import { FestivalEntity } from '@src/module/festival/entities/festival.entity';
import { Country } from '@src/module/festival/vo/country';
import { CountryNameEnum } from '@src/module/festival/dto/country-name.enum';
import * as dayjs from 'dayjs';

describe('FestivalEntity 테스트', () => {
  let entity: FestivalEntity;
  beforeEach(() => {
    entity = Object.assign(new FestivalEntity(), {
      id: 1,
      name: '마쯔리',
      country: new Country(CountryNameEnum.JAPAN),
      startAt: dayjs(),
      endAt: dayjs(),
    });
  });

  it('entity 생성 테스트', () => {
    const result = entity.toFestivalResponse();

    expect(result.country.toString()).toEqual('JAPAN');
    expect(result.startAt).toBeInstanceOf(dayjs);
  });
});
