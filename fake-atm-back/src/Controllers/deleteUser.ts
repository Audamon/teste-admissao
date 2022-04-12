import { Response, Request } from 'express';

export async function deleteUser(req: Request, res: Response) {
  try {
    return res.status(200);
  } catch (error) {
    return res.status(500).send(error);
  }
}
