import { AppDataSource } from '../database';
import UserEntity from '../Entities/UserEntity';
import * as getUserIdService from './getUserId';

export async function getUser(token: string) {
  const idUser = await getUserIdService.getUserId(token);
  const user = await AppDataSource.manager.findOneBy(UserEntity, {
    id: idUser,
  });
  return user.getUser();
}
