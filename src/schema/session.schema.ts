import { string, object, TypeOf } from 'zod';

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
});

export type createSessionInput = TypeOf<typeof createSessionSchema>;
