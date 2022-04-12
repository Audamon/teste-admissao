import { v4 as uuid } from 'uuid';
import SessionsEntity from '../Entities/SessionEntity';
import { AppDataSource } from '../database';
import { Users } from '../Interfaces/UserInterface';

export async function createSession(user: Users) {
  const token = uuid();
  const data = {
    idUser: user.id,
    token,
  };
  const session = await AppDataSource.getRepository(SessionsEntity).create(
    data,
  );
  await AppDataSource.getRepository(SessionsEntity).save(session);
  return session;
}
