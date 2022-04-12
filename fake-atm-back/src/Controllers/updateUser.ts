import { Request, Response } from 'express';
import { Users } from '../Interfaces/UserInterface';
import * as updateUserService from '../Services/updateUser';

export async function updateUser(req: Request, res: Response) {
  const {
    name, adress, birthday,
  }: Users = req.body;
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  try {
    const user = await updateUserService.updateUser(name, adress, birthday, token);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}
