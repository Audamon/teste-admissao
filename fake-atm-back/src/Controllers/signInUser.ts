import { Request, Response } from 'express';
import { Users } from '../Interfaces/UserInterface';
import * as signInUserService from '../Services/signInUser';

export async function signInUser(req: Request, res: Response) {
  const { cpf, password }: Users = req.body;
  try {
    const session = await signInUserService.signInUser(password, cpf);
    if (!session) {
      return res.sendStatus(403);
    }
    return res.status(200).send(session);
  } catch (error) {
    return res.status(500).send(error);
  }
}
