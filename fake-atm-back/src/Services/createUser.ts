import { AppDataSource } from '../database';
import UserEntity from '../Entities/UserEntity';
import { Users } from '../Interfaces/UserInterface';
import * as encryptPasswordService from './encryptPassword';

export async function createUser(
  name: String,
  adress: string,
  cpf: string,
  password: string,
  birthday: string,
) {
  const encryptedPassword = await encryptPasswordService.encryptPassword(
    password,
  );
  const data = {
    name,
    encryptedPassword,
    adress,
    cpf,
    birthday,
  } as Users;

  const user = await AppDataSource.getRepository(UserEntity).create(data);
  await AppDataSource.getRepository(UserEntity).save(user);
  return user;
}
