import { Request, Response } from 'express';
import { Users } from '../Interfaces/UserInterface';
import * as createUserService from '../Services/createUser';

export async function createUser(req: Request, res: Response) {
  const {
    name, adress, cpf, password, birthday,
  }: Users = req.body;
  try {
    const user = await createUserService.createUser(
      name,
      adress,
      cpf,
      password,
      birthday,
    );

    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
}
