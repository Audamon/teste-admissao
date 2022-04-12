import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  name: 'default',
  url: process.env.DATABASE_URL,
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: '123456',
  // database: 'fakeatm',
  entities: [
    `${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/Entities/*.*`,
  ],
});

export default async function connect() {
  return AppDataSource.initialize();
}

export { AppDataSource };
