import { FestivalEntity } from '@src/module/festival/entities/festival.entity';
import { Connection } from 'typeorm';
import { Country } from '@src/module/festival/vo/country';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';
import { CommonRepository } from '@src/common/typeorm/common.repository';

/**
 *
 */
@Injectable()
export class FestivalRepository extends CommonRepository {
  constructor(
    @InjectConnection()
    protected readonly connection: Connection,
  ) {
    super(connection);
    this.repository = this.getRepository(FestivalEntity);
  }

  createAndSave(
    name: string,
    country: Country,
    startAt: dayjs.Dayjs,
    endAt: dayjs.Dayjs,
  ): Promise<FestivalEntity> {
    const instance = this.repository.create({
      name,
      country,
      startAt,
      endAt,
    });

    return this.repository.save(instance);
  }

  /**
   *
   * @param country
   */
  getFestivalsByCountry(country: Country): Promise<FestivalEntity[]> {
    return this.repository
      .createQueryBuilder('c')
      .where(`country = :country`, { country: country.toString() })
      .getMany();
  }
}

// fixme. ??
// /**
//  *
//  */
// @EntityRepository(FestivalEntity)
// export class FestivalRepository extends Repository<FestivalEntity> {
//   /**
//    *
//    */
//   getFestivalsByCountry(country: Country): Promise<FestivalEntity[]> {
//     return this.createQueryBuilder('c')
//       .where(`country = :country`, { country: country.toString() })
//       .getMany();
//   }
// }
