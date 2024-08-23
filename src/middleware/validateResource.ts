import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, number } from 'zod';
import { log } from '../utils/logger';

export const validateResource =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log('Request body:', req.body);
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (e: any) {
      log.error(e);
      return res.status(400).send('validation error');
    }
    next();
  };
