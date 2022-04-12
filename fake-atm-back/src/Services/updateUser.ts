import { AppDataSource } from '../database';
import UserEntity from '../Entities/UserEntity';

export async function updateUser(
  name: string,
  adress: string,
  birthday: string,
  id: number,
) {
  const updatedUser = await AppDataSource.manager.update(UserEntity, id, {
    ...(name && { name }),
    ...(adress && { adress }),
    ...(birthday && { birthday }),
  });
  console.log(updatedUser);
  if (!updatedUser) {
    return null;
  }
  return updatedUser;
}
