import { Request, Response } from 'express';
import * as getUserService from '../Services/getUser';

export async function getUser(req: Request, res: Response) {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  try {
    const user = await getUserService.getUser(token);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}
