import { FestivalBodyPipe } from '@src/module/festival/pipes/festival-body.pipe';
import { ArgumentMetadata } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { FestivalBody } from '@src/module/festival/dto/festival.body';

describe('FestivalBodyPipe 테스트', () => {
  let pipe: FestivalBodyPipe;
  let metadata: ArgumentMetadata;

  beforeEach(() => {
    pipe = new FestivalBodyPipe();
    metadata = { type: 'body' };
  });

  it('startAt 을 dayjs 인스턴스로 변환합니다.', () => {
    const value = {
      name: '마쯔리',
      country: 'JAPAN',
      startAt: '2021-06-01',
      endAt: '2021-06-02',
    } as unknown as FestivalBody;

    const result = pipe.transform(value, metadata);

    expect(dayjs.isDayjs(result.startAt)).toBeTruthy();
  });
});
