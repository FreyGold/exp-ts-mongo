import { Request, Response } from 'express';
import { createSessionInput } from '../schema/session.schema';
import { createSession } from '../service/session.service';
import { UserModel } from '../model/user.model';
import { validatePassword } from '../service/user.service';

export const createSessionHandler = async (
  req: Request<{}, {}, createSessionInput['body']>,
  res: Response
) => {

  const user = await validatePassword(req.body)

  if(!user){
    return res.send(401).send("invalid email or password!")
  }

  const session = createSession(user._id.toString(), req.get("user-agent") || " ")
}
