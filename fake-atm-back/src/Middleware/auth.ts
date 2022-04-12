import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../database';
import SessionEntity from '../Entities/SessionEntity';

export async function userAuthorization(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  const session = await AppDataSource.manager.findOneBy(SessionEntity, { token });
  if (!session.token) {
    return res.sendStatus(401);
  }

  next();
}
