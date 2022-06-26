import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { FestivalModule } from '@src/module/festival/festival.module';

@Module({
  imports: [CoreModule, FestivalModule],
})
export class AppModule {}
