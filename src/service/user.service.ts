import { ObtainDocumentType } from 'mongoose';
import { UserDocument, UserModel } from '../model/user.model';
import { omit } from 'lodash';

export const createUser = async function (
  input: ObtainDocumentType<UserDocument>
) {
  try {
    const user = await UserModel.create(input)
    return omit(user.toJSON(), 'password');
  } catch (err: any) {
    throw new Error(err);
  }
};

export const validatePassword = async function(
  {email, password}: {email:string, password:string}
) {

  const user = await UserModel.findOne({email});

  if(!user){
    return false;
  }
  const isValid = user.comparePassword(password)

  if(!isValid){
    return false;
  }

  return await omit(user.toJSON(), 'password')
};