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
    const user = await createUser(req.body);
    res.status(200).send(omit(user.toJSON(), 'password'));
  } catch (err: any) {
    log.error(err);
    res.status(409).send(err.message);
  }
};
