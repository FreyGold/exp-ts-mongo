import { string, object, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'you must provide a name!',
    }),
    email: string({
      required_error: 'you must provide an email!',
    }).email('not a valid email!'),
    password: string({
      required_error: 'you must provide an email!',
    }).min(8, 'must be more than 8 letters and numbers'),
    passwordConfirmation: string({
      required_error: 'you must provide an email!',
    }).min(8, 'must be more than 8 letters and numbers'),
  }).refine(data => data.password === data.passwordConfirmation, {
    message: "password doesn't match!",
    path: ['passwordConfirmation'],
  }),
});

export type createUserInput = TypeOf<typeof createUserSchema>;
