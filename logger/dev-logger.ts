import path from 'path';
import winston from 'winston';

const baseDir = path.dirname(path.dirname(__filename));

function devLoggerFactory(workingDirectory: string) {
  const fromFilePath = path.resolve(baseDir, workingDirectory);

  return function createDevLogger(toFilePath: string) {
    const relativeFilePath = path.relative(fromFilePath, toFilePath);
    const logFormat = winston.format.printf(
      ({ level, message, timestamp, stack }) =>
        `${timestamp} [${relativeFilePath}] ${level.toUpperCase()}: ${
          stack || message
        }`
    );
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'MM/DD/YYYY HH:mm:ss' }),
        winston.format.errors({ stack: true }),
        logFormat
      ),
      level: process.env.LOG_LEVEL || 'debug',
      transports: [new winston.transports.Console()],
    });
  };
}

export default devLoggerFactory;
