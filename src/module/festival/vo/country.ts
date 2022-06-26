import { CountryNameEnum } from '@src/module/festival/dto/country-name.enum';
import { IsNotEmpty, IsString, Min } from 'class-validator';

/**
 *
 */
export class Country {
  @IsString()
  @IsNotEmpty({
    message: 'name is empty',
  })
  private readonly _name: CountryNameEnum;

  constructor(name: CountryNameEnum) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  toString() {
    return this._name;
  }
}
