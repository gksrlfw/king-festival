import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { Country } from '@src/module/festival/vo/country';
import { FestivalService } from '@src/module/festival/festival.service';
import { FestivalResponse } from '@src/module/festival/dto/festival.response';
import { FestivalBody } from '@src/module/festival/dto/festival.body';
import { ApiBody, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { FestivalBodyPipe } from '@src/module/festival/pipes/festival-body.pipe';

/**
 *
 */
@Controller('festival')
export class FestivalController {
  private readonly logger = new Logger(this.constructor.name);
  constructor(private readonly festivalService: FestivalService) {}

  /**
   *
   * @param body
   */
  @ApiOperation({
    summary: 'festival 을 생성합니다.',
  })
  @ApiBody({
    type: FestivalBody,
    description: 'festival 생성 입력값입니다.',
    examples: {
      마쯔리: {
        value: {
          name: '마쯔리',
          country: 'JAPAN',
          startAt: '2022-06-01',
          endAt: '2022-06-02',
        },
      },
    },
  })
  @Post()
  createFestival(
    @Body(FestivalBodyPipe) body: FestivalBody,
  ): Promise<FestivalResponse> {
    this.logger.debug(`body: ${body.toString()}`);
    return this.festivalService.createFestival(
      body.name,
      body.country,
      body.startAt,
      body.endAt,
    );
  }

  /**
   *
   */
  @ApiOperation({
    summary: 'festival 을 조회합니다.',
  })
  @ApiQuery({
    name: 'name',
    example: 'KOREA',
    description: '국가 이름',
  })
  @Get()
  getFestival(@Query() country: Country): Promise<FestivalResponse[]> {
    this.logger.debug(`country: ${country.toString()}`);
    return this.festivalService.getFestivalsByCountry(country);
  }
}
