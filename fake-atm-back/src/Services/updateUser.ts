import { AppDataSource } from '../database';
import UserEntity from '../Entities/UserEntity';
import * as getUserIdService from './getUserId';

export async function updateUser(
  name: string,
  adress: string,
  birthday: string,
  token: string,
) {
  const id = await getUserIdService.getUserId(token);
  const updatedUser = await AppDataSource.manager.update(UserEntity, id, {
    ...(name && { name }),
    ...(adress && { adress }),
    ...(birthday && { birthday }),
  });
  if (!updatedUser) {
    return null;
  }
  return updatedUser;
}
