import { Logger } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

/**
 * 공통 repository
 */
export class CommonRepository {
  protected readonly logger = new Logger(this.constructor.name);
  protected repository: Repository<any>;
  constructor(
    @InjectConnection()
    protected readonly connection: Connection,
  ) {}

  /**
   *
   * @param classType
   */
  protected getRepository(classType: any): Repository<any> {
    return this.connection.getRepository(classType);
  }
}
