import { Injectable, Logger } from '@nestjs/common';
import { Country } from '@src/module/festival/vo/country';
import { FestivalResponse } from '@src/module/festival/dto/festival.response';
import * as dayjs from 'dayjs';
import { FestivalRepository } from '@src/module/festival/repositories/festival.repository';

/**
 *
 */
@Injectable()
export class FestivalService {
  private readonly logger = new Logger(this.constructor.name);

  constructor(private readonly festivalRepository: FestivalRepository) {}

  /**
   * festival 을 생성합니다.
   * @param name
   * @param country
   * @param startAt
   * @param endAt
   */
  async createFestival(
    name: string,
    country: Country,
    startAt: dayjs.Dayjs,
    endAt: dayjs.Dayjs,
  ): Promise<FestivalResponse> {
    this.logger.debug(`country: ${country.toString()}`);

    const entity = await this.festivalRepository.createAndSave(
      name,
      country,
      startAt,
      endAt,
    );

    this.logger.debug(`entity: ${entity.toString()}`);

    return entity.toFestivalResponse();
  }

  /**
   * country 로 festival 을 조회합니다.
   * @param country
   */
  async getFestivalsByCountry(country: Country): Promise<FestivalResponse[]> {
    this.logger.debug(`country: ${country.toString()}`);

    const entities = await this.festivalRepository.getFestivalsByCountry(
      country,
    );

    this.logger.debug(`entities: ${JSON.stringify(entities)}`);

    return entities.map((e) => e.toFestivalResponse());
  }
}
