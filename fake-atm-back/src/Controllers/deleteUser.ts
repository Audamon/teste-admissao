import { Response, Request } from 'express';
import * as deleteUserService from '../Services/deleteUser';

export async function deleteUser(req: Request, res: Response) {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  try {
    console.log('ok');
    const deletion = await deleteUserService.deleteUser(token);
    return res.status(200).send(deletion);
  } catch (error) {
    return res.status(500).send(error);
  }
}
