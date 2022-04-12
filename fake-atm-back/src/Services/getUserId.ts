import { AppDataSource } from '../database';
import SessionsEntity from '../Entities/SessionEntity';

export async function getUserId(token: string) {
  const session = await AppDataSource.manager.findOneBy(SessionsEntity, {
    token,
  });

  return session.idUser;
}
