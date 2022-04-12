import bcrypt from 'bcrypt';

export async function checkPassword(password: string, user: string) {
  if (!bcrypt.compareSync(password, user)) {
    return null;
  }
  return password;
}
