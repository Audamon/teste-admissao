import { AppDataSource } from '../database';
import UserEntity from '../Entities/UserEntity';
import SessionsEntity from '../Entities/SessionEntity';
import * as checkPasswordService from './checkPassword';
import * as createSessionService from './createSession';

export async function signInUser(
  password: string,
  cpf: string,
): Promise<SessionsEntity> {
  const user = await AppDataSource.manager.findOneBy(UserEntity, { cpf });
  const checkedPassword = await checkPasswordService.checkPassword(
    password,
    user.encryptedPassword,
  );
  if (!checkedPassword) {
    return null;
  }
  if (!user) {
    return null;
  }
  const session = await createSessionService.createSession(user);

  return session;
}
