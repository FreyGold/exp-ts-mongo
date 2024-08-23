import { string, object, TypeOf } from 'zod';

export const createSessionSchema = object({
  body: object({
    userId: string({
      required_error: 'you must provide a user!',
    }),
  }),
});

export type createSessionInput = TypeOf<typeof createSessionSchema>;
