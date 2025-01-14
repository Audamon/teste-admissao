import dotenv from 'dotenv';

const path = process.env.NODE_ENV === 'test' ? '.env.test' : process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env';

dotenv.config({ path });
