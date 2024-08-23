import { Request, Response } from 'express';
import { createSessionInput } from '../schema/session.schema';
import { createSession } from '../service/session.service';
import { UserModel } from '../model/user.model';

export const createSessionHandler = async (
  req: Request<{}, {}, createSessionInput['body']>,
  res: Response
) => {
  const user = UserModel.findById(req.body.userId);
};
