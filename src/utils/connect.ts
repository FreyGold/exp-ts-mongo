import mongoose from 'mongoose';
import config from 'config';
import { log } from './logger';

export const connect = () => {
  mongoose
    .connect(config.get<string>('db'))
    .then(() => {
      log.info('connected succesfully');
    })
    .catch(err => log.error('Could not connect to MongoDB...', err));
};
