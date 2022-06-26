import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DatetimeEntity } from '@src/common/typeorm/entities/datetime.entity';
import * as dayjs from 'dayjs';
import { Country } from '@src/module/festival/vo/country';
import { CountryTransformer } from '@src/module/festival/entities/transformer/country.transformer';
import { DateTimeTransformer } from '@src/common/typeorm/transformer/date-time.transformer';
import { FestivalResponse } from '@src/module/festival/dto/festival.response';
import { classToPlain, plainToClass } from 'class-transformer';
import { FestivalRepository } from '@src/module/festival/repositories/festival.repository';

/**
 *
 */
@Entity('festival')
export class FestivalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '축제이름',
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    comment: '국가',
    type: 'varchar',
    nullable: false,
    transformer: CountryTransformer,
  })
  country: Country;

  @Column({
    comment: '시작일',
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    transformer: DateTimeTransformer,
  })
  startAt: dayjs.Dayjs;

  @Column({
    comment: '생성일',
    type: 'datetime',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    transformer: DateTimeTransformer,
  })
  endAt: dayjs.Dayjs;

  /**
   *
   */
  toString(): string {
    return JSON.stringify(this);
  }

  /**
   *
   */
  toFestivalResponse(): FestivalResponse {
    return plainToClass(FestivalResponse, {
      name: this.name,
      country: this.country,
      startAt: this.startAt,
      endAt: this.endAt,
    });
  }
}
