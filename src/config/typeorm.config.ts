import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPEORMCONFIG: TypeOrmModuleOptions = {
  database: 'chat_app_server',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  port: 5432,
  type: 'postgres',
  logging: true,
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  synchronize: true,
};
