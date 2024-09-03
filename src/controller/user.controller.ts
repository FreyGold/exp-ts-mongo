import { Request, Response } from 'express';
import { log } from '../utils/logger';
import { createUser } from '../service/user.service';
import { createUserInput } from '../schema/user.schema';
import { omit } from 'lodash';

export const createUserHandler = async (
  req: Request<{}, {}, createUserInput['body']>,
  res: Response
) => {
  try {
    const user = createUser(req.body);
    res.status(200).send(user);
  } catch (err: any) {
    log.error(err);
    res.status(409).send(err.message);
  }
};
