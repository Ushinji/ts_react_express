import pino from 'pino';
import pinoHttp from 'pino-http';

const NODE_ENV = process.env.NODE_ENV || 'development';

export const logger = pino({
  name: 'diary_app',
  level: 'info',
  enabled: NODE_ENV !== 'test',
});

export const requestLogger = pinoHttp({ logger });
