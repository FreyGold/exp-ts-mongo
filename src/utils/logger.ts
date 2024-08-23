import pino from 'pino';
import { pid } from 'process';

// Create a Pino logger instance with pino-pretty transport
export const log = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true, // Add colorization for readability
      include: 'level,time, pid',
    },
  },
  base: {
    pid,
  },
});
