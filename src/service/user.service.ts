import { ObtainDocumentType } from 'mongoose';
import { UserDocument, UserModel } from '../model/user.model';
export const createUser = async function (
  input: ObtainDocumentType<UserDocument>
) {
  try {
    return await UserModel.create(input);
  } catch (err: any) {
    throw new Error(err);
  }
};
