import { Module } from '@nestjs/common';
import { FestivalService } from '@src/module/festival/festival.service';
import { FestivalController } from '@src/module/festival/festival.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FestivalEntity } from '@src/module/festival/entities/festival.entity';
import { FestivalRepository } from '@src/module/festival/repositories/festival.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FestivalEntity])],
  controllers: [FestivalController],
  providers: [FestivalService, FestivalRepository],
  exports: [FestivalService, FestivalRepository],
})
export class FestivalModule {}
