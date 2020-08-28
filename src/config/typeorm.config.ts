import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPEORMCONFIG: TypeOrmModuleOptions = {
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'chat_app_server',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  port: 5432,
  type: 'postgres',
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  synchronize: true,
};
