import SessionsEntity from '../Entities/SessionEntity';
import UserEntity from '../Entities/UserEntity';
import { AppDataSource } from '../database';
import * as getUserIdService from './getUserId';

export async function deleteUser(token: string) {
  const userId = await getUserIdService.getUserId(token);
  await AppDataSource.manager.delete(SessionsEntity, { token });
  const deletion = await AppDataSource.manager.delete(UserEntity, {
    id: userId,
  });

  return deletion;
}
