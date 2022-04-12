import { hashSync } from 'bcrypt';

export async function encryptPassword(password: string): Promise<string> {
  const encryptedPassword = await hashSync(password, 10);
  return encryptedPassword;
}
