import path from 'path';
import winston from 'winston';
import WinstonCloudwatch from 'winston-cloudwatch';
import AWS from 'aws-sdk';
import crypto from 'crypto';

AWS.config.update({ region: process.env.AWS_REGION || 'us-east-1' });

const startTime = new Date().toISOString();
const baseDir = path.dirname(path.dirname(__filename));

const cloudWatchTransport = new WinstonCloudwatch({
  name: 'cougarcs-admin-portal',
  logGroupName: 'admin-portal',
  logStreamName() {
    const date = new Date().toISOString().split('T')[0];
    return `prod-${date}-${crypto
      .createHash('md5')
      .update(startTime)
      .digest('hex')}`;
  },
});

function prodLoggerFactory(workingDirectory: string) {
  const fromFilePath = path.resolve(baseDir, workingDirectory);

  return function createProdLogger(toFilePath: string) {
    const relativeFilePath = path.relative(fromFilePath, toFilePath);
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
      ),
      defaultMeta: { service: 'cougarcs-admin-portal', file: relativeFilePath },
      level: process.env.LOG_LEVEL || 'info',
      transports: [cloudWatchTransport],
    });
  };
}

export default prodLoggerFactory;
